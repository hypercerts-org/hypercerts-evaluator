import { CLAIMS_PER_PAGE } from "../../config";
import ClaimBox from "./ClaimBox";
import ClaimsGridSkeleton from "./ClaimGridSkeleton";
import { Grid } from "@chakra-ui/react";
import { useAllClaims } from "../../claims/useClaims";

export default function ClaimsList({ page }: { page: number }) {
  page = page || 1;
  const { data, isPending, error } = useAllClaims(
    CLAIMS_PER_PAGE,
    (page - 1) * CLAIMS_PER_PAGE
  );

  if (isPending) return <ClaimsGridSkeleton />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5} p={5} w="100%">
      {data.claims.map((claim, i) => (
        <ClaimBox data={claim} key={i} />
      ))}
    </Grid>
  );
}
