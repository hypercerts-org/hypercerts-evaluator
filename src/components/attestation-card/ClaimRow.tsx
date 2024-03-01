import { Flex, Text } from "@chakra-ui/react";

import ClaimRowSkeleton from "./ClaimRowSkeleton";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import Image from "next/image";
import { isValidImageSrc } from "../../utils/isValidImageSrc";
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

  const claim = readFragment(FullClaimFragment, data?.claim);

  if (!claim || !data?.claim) return <div>Claim not found</div>;

  const imageSrc = isValidImageSrc(claim.metadata?.image)
    ? claim.metadata?.image
    : null;

  return (
    <Flex w={"100%"} gap={3}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="Hypercert"
          width="30"
          height="30"
          style={{ borderRadius: "5px", objectFit: "contain" }}
        />
      )}

      <Text>{claim.metadata?.name}</Text>
    </Flex>
  );
}
