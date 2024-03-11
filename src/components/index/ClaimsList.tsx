import { AllClaimsSort, useAllClaims } from "../../hypercerts/hooks/useClaims";

import { CLAIMS_PER_PAGE } from "../../config";
import ClaimBox from "./ClaimBox";
import ClaimsGridSkeleton from "./ClaimGridSkeleton";
import { Grid } from "@chakra-ui/react";
import { useQueryStringParameter } from "../../utils/useQueryStringParameter";

export default function ClaimsList({ page }: { page: number }) {
  const sort = useQueryStringParameter<AllClaimsSort>("sort", "creation_asc");

  page = page || 1;
  const { data, isPending, error } = useAllClaims(
    CLAIMS_PER_PAGE,
    (page - 1) * CLAIMS_PER_PAGE,
    sort
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
