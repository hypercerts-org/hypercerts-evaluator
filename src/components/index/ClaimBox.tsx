import { Box, GridItem } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import Image from "next/image";
import Link from "next/link";
import { ListClaimFragment } from "../../hypercerts/fragments";
import { isValidImageSrc } from "../../utils/isValidImageSrc";

export default function ClaimBox({
  data,
}: {
  data: FragmentOf<typeof ListClaimFragment>;
}) {
  const claim = readFragment(ListClaimFragment, data);

  const imageSrc = isValidImageSrc(claim.metadata?.image)
    ? claim.metadata?.image
    : null;

  return (
    <GridItem w="200px" h="200px" mt={5}>
      <Link href={`/claim/${claim.id}`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Hypercert"
            width="200"
            height="200"
            style={{ objectFit: "contain", width: "200px", height: "200px" }}
          />
        ) : (
          <Box border="1px" borderColor="black" p={5} h="100%">
            <Box>{claim.metadata?.name}</Box>
          </Box>
        )}
      </Link>
    </GridItem>
  );
}
