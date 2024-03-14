import * as R from "remeda";

import { Flex, GridItem, Text } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import Image from "next/image";
import Link from "next/link";
import { ListClaimFragment } from "../../hypercerts/fragments/list-claim.fragment";

function ClaimBoxDate({ blockTimestamp }: { blockTimestamp: unknown }) {
  if (!R.isString(blockTimestamp)) {
    return null;
  }

  let dateNumber = Number.parseInt(blockTimestamp); // timestamp is in seconds

  if (!R.isNumber(dateNumber)) {
    return (
      <Text fontSize="sm" opacity="50%">
        Invalid date
      </Text>
    );
  }

  const date = new Date(dateNumber * 1000);

  return (
    <Text fontSize="sm" opacity="50%">
      {date.toISOString().substring(0, 10)}
    </Text>
  );
}

export default function ClaimBox({
  data,
}: {
  data: FragmentOf<typeof ListClaimFragment>;
}) {
  const claim = readFragment(ListClaimFragment, data);
  return (
    <GridItem mt={5}>
      <Link href={`/claim/${claim.claim_id}`}>
        <Flex direction="column" alignItems="flex-start">
          <Image
            src={`${window.location.origin}/api/image/${claim.claim_id}`}
            alt="Hypercert"
            width="200"
            height="200"
            style={{
              objectFit: "contain",
              width: "200px",
              height: "200px",
              background: "RGBA(0,0,0,0.1)",
              padding: "20px",
              marginBottom: "10px",
            }}
          />
          <ClaimBoxDate blockTimestamp={claim.block_timestamp} />
          <Text size="sm">{claim.name}</Text>
        </Flex>
      </Link>
    </GridItem>
  );
}
