import { Skeleton } from "@chakra-ui/react";

export default function ClaimRowSkeleton() {
  return (
    <Skeleton
      w="100%"
      h="45px"
      startColor="rgba(0,0,0,0.1)"
      endColor="rgba(0,0,0,0.2)"
      fadeDuration={2}
    />
  );
}
