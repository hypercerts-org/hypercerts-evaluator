import ClaimBox from "./ClaimBox";
import ClaimGridSkeleton from "./ClaimGridSkeleton";
import { Grid } from "@chakra-ui/react";
import { useAllClaims } from "../../claims/useClaims";

export default function ClaimsList() {
  const { data, isPending, error } = useAllClaims(12, 0);

  if (isPending) return <ClaimGridSkeleton />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5} p={5} w="100%">
      {data.claims.map((claim, i) => (
        <ClaimBox data={claim} key={i} />
      ))}
    </Grid>
  );
}
