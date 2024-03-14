import type { NextApiRequest, NextApiResponse } from "next";

import { HYPERCERTS_API_URL } from "../../../config";
import { gqlHypercerts } from "../../../graphql/hypercerts";
import request from "graphql-request";

const CLAIM_QUERY = gqlHypercerts(`
  query ClaimImage($claim_id: BigFloat!) {
    hypercertsCollection(filter: { claim_id: { eq: $claim_id } }) {
      edges {
        node {
          image
        }
      }
    }
  }
`);

const PLACEHOLER_IMAGE_URL = "/cert-placeholder.webp";

async function getImageData(
  imageOrUrl: string
): Promise<{ contentType: string; buffer: Buffer }> {
  if (imageOrUrl.startsWith("data:image")) {
    const [metadata, base64Data] = imageOrUrl.split(",");
    const contentType = metadata.split(";")[0].split(":")[1];
    const buffer = Buffer.from(base64Data, "base64");
    return { contentType, buffer };
  } else if (imageOrUrl.startsWith("http")) {
    const response = await fetch(imageOrUrl);
    const blob = await response.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());
    return { contentType: blob.type, buffer };
  }
  throw new Error("Invalid image data");
}

async function placeholderImageResponse(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const placeholderResponse = await fetch(
    `${req.headers["x-forwarded-proto"]}://${req.headers["host"]}${PLACEHOLER_IMAGE_URL}`
  );
  const blob = await placeholderResponse.blob();
  const buffer = Buffer.from(await blob.arrayBuffer());
  res.setHeader("Content-Type", blob.type);
  res.status(200).send(buffer);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { id } = req.query;
  if (!id || Array.isArray(id)) {
    res.status(400).send("Invalid ID");
    return;
  }

  try {
    const response = await request(HYPERCERTS_API_URL, CLAIM_QUERY, {
      claim_id: id,
    });
    const imageOrUrl = response.hypercertsCollection?.edges[0]?.node?.image;

    if (!imageOrUrl) {
      await placeholderImageResponse(req, res);
      return;
    }

    res.setHeader("Cache-Control", "s-maxage=864000"); // 10 days

    try {
      const { contentType, buffer } = await getImageData(imageOrUrl);
      res.setHeader("Content-Type", contentType);
      res.status(200).send(buffer);
    } catch {
      await placeholderImageResponse(req, res);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing request");
  }
}
