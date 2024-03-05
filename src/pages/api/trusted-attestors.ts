import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const result = await fetch(
    "https://github.com/hypercerts-org/hypercerts-attestor-registry/raw/main/attestor.json"
  );
  const json = await result.json();
  res.setHeader("Cache-Control", "s-maxage=3600"); // 1 hour
  res.status(200).json(json);
}
