import { Grid, GridItem, Skeleton } from "@chakra-ui/react";

export default function ClaimsGridSkeleton() {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={5}
      p={5}
      w="100%"
      borderLeft="1px solid black"
      borderRight="1px solid black"
      borderBottom="1px solid black"
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <GridItem w="225px" h="320px" key={index}>
          <Skeleton
            w="100%"
            h="100%"
            startColor="rgba(0,0,0,0.1)"
            endColor="rgba(0,0,0,0.2)"
            fadeDuration={2}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
