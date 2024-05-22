import { Badge, Box, Flex, GridItem, Text } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import FormattedDate from "../ui/FormattedDate";
import { HypercertListFragment } from "../../hypercerts/fragments/hypercert-list.fragment";
import Image from "next/image";
import Link from "next/link";

export default function ClaimsListBox({
  data,
}: {
  data: FragmentOf<typeof HypercertListFragment>;
}) {
  const cert = readFragment(HypercertListFragment, data);

  const attestationCount = cert.attestations?.count || 0;

  return (
    <GridItem mt={5} p={5} _hover={{ background: "rgba(0,0,0,0.1)" }}>
      <Link href={`/claim/${cert.hypercert_id}`}>
        <Flex direction="column" alignItems="flex-start" position="relative">
          {attestationCount > 0 && (
            <Flex
              style={{
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: -5,
                top: -5,
                background: "rgb(0,0,0)",
                color: "white",
                borderRadius: "100%",
                width: "20px",
                height: "20px",
              }}
              fontSize="xs"
            >
              {attestationCount}
            </Flex>
          )}
          <Image
            src={`${window.location.origin}/api/image/${cert.hypercert_id}`}
            alt="Hypercert"
            width="225"
            height="225"
            style={{
              objectFit: "contain",
              width: "225px",
              height: "225px",
              background: "white",
              padding: "20px",
              marginBottom: "10px",
            }}
          />
          <FormattedDate seconds={cert.creation_block_timestamp} />
          <Text as="span" textStyle={"secondary"}>
            {cert.metadata?.name || "No name"}
          </Text>
        </Flex>
      </Link>
    </GridItem>
  );
}
