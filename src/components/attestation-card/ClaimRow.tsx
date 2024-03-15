import { Flex, Text } from "@chakra-ui/react";

import ClaimRowSkeleton from "./ClaimRowSkeleton";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import Image from "next/image";
import { readFragment } from "gql.tada";
import { useClaim } from "../../hypercerts/hooks/useClaim";

export default function HypercertRow({ claimId }: { claimId?: string }) {
  const { data, isPending, error } = useClaim(claimId);

  if (isPending) {
    return <ClaimRowSkeleton />;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const claim = readFragment(
    FullClaimFragment,
    data?.hypercertsCollection?.edges[0]?.node
  );

  if (!claim || !data) return <div>Claim not found</div>;

  return (
    <Flex w={"100%"} gap={3} borderRadius={5} alignItems="center">
      <Image
        src={`${window.location.origin}/api/image/${claim.claim_id}`}
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
        {claim.name}
      </Text>
    </Flex>
  );
}
