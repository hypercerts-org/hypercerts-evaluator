import { Grid, Skeleton } from "@chakra-ui/react";

export default function EvaluatorEvaluationsListSkeleton() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={5}>
      <Skeleton
        w="100%"
        h="180px"
        startColor="rgba(0,0,0,0.1)"
        endColor="rgba(0,0,0,0.2)"
        fadeDuration={2}
      />
      <Skeleton
        w="100%"
        h="180px"
        startColor="rgba(0,0,0,0.1)"
        endColor="rgba(0,0,0,0.2)"
        fadeDuration={2}
      />
    </Grid>
  );
}
