import { FragmentOf, readFragment } from "gql.tada";

import { GridItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ListClaimFragment } from "../../hypercerts/fragments/list-claim.fragment";

export default function ClaimBox({
  data,
}: {
  data: FragmentOf<typeof ListClaimFragment>;
}) {
  const claim = readFragment(ListClaimFragment, data);

  return (
    <GridItem w="200px" h="200px" mt={5}>
      <Link href={`/claim/${claim.id}`}>
        <Image
          src={`${window.location.origin}/api/image/${claim.id}`}
          alt="Hypercert"
          width="200"
          height="200"
          style={{ objectFit: "contain", width: "200px", height: "200px" }}
        />
      </Link>
    </GridItem>
  );
}
