import { Flex, Text } from "@chakra-ui/react";

import ClaimRowSkeleton from "./ClaimRowSkeleton";
import { HypercertFullFragment } from "../../hypercerts/fragments/hypercert-full.fragment";
import Image from "next/image";
import { readFragment } from "gql.tada";
import { useHypercert } from "../../hypercerts/hooks/useHypercert";

export default function HypercertRow({ claimId }: { claimId?: string }) {
  const { data, isPending, error } = useHypercert(claimId);

  if (isPending) {
    return <ClaimRowSkeleton />;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const claim = readFragment(HypercertFullFragment, data?.hypercerts.data[0]);

  if (!claim || !data) return <div>Claim not found</div>;

  return (
    <Flex w={"100%"} gap={3} borderRadius={5} alignItems="center">
      <Image
        src={`${window.location.origin}/api/image/${claim.hypercert_id}`}
        alt="Hypercert"
        width="70"
        height="70"
        style={{
          width: "70px",
          height: "70px",
          objectFit: "contain",
          background: "white",
          padding: "5px",
        }}
      />
      <Text as="span" textStyle={"secondary"}>
        {claim.metadata?.name}
      </Text>
    </Flex>
  );
}
