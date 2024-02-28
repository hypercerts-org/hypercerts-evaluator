import { Grid, GridItem, Skeleton } from "@chakra-ui/react";

export default function ClaimGridSkeleton() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5} p={5} w="100%">
      {Array.from({ length: 12 }).map((_, index) => (
        <GridItem w="100%" h="240px" key={index} p={5}>
          <Skeleton
            w="100%"
            h="100%"
            startColor="gray.200"
            endColor="gray.300"
            fadeDuration={1}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
