import { Badge, Flex, GridItem, Text } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import FormattedDate from "../ui/FormattedDate";
import Image from "next/image";
import Link from "next/link";
import { ListClaimFragment } from "../../hypercerts/fragments/list-claim.fragment";

export default function ClaimsListBox({
  data,
}: {
  data: FragmentOf<typeof ListClaimFragment>;
}) {
  const claim = readFragment(ListClaimFragment, data);

  const attestationCount = claim.claimAttestations?.count || 0;

  return (
    <GridItem mt={5} p={5} _hover={{ background: "rgba(0,0,0,0.1)" }}>
      <Link href={`/claim/${claim.claim_id}`}>
        <Flex direction="column" alignItems="flex-start">
          {attestationCount > 0 && (
            <Badge style={{ position: "absolute" }}>{attestationCount}</Badge>
          )}
          <Image
            src={`${window.location.origin}/api/image/${claim.claim_id}`}
            alt="Hypercert"
            width="200"
            height="200"
            style={{
              objectFit: "contain",
              width: "200px",
              height: "200px",
              background: "white",
              padding: "20px",
              marginBottom: "10px",
            }}
          />
          <FormattedDate seconds={claim.block_timestamp} />
          <Text as="span" textStyle={"secondary"}>
            {claim.name}
          </Text>
        </Flex>
      </Link>
    </GridItem>
  );
}
