import { Box, GridItem } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import Image from "next/image";
import Link from "next/link";
import { ListClaimFragment } from "../../claims/fragments";

export default function ClaimBox({
  data,
}: {
  data: FragmentOf<typeof ListClaimFragment>;
}) {
  const claim = readFragment(ListClaimFragment, data);
  return claim.metadata?.image ? (
    <GridItem w="100%" h="250px" pt={5}>
      <Link href={`/claim/${claim.id}`}>
        <Image
          src={claim.metadata.image}
          alt="Hypercert"
          width="200"
          height="250"
        />
      </Link>
    </GridItem>
  ) : (
    <GridItem w="100%" h="240px" p={5}>
      <Link href={`/claim/${claim.id}`}>
        <Box border="1px" borderColor="black" p={5} h="100%">
          No name available
        </Box>
      </Link>
    </GridItem>
  );
}
