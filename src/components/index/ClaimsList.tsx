import { ClaimsOrderBy, useAllClaims } from "../../hypercerts/hooks/useClaims";

import { CLAIMS_PER_PAGE } from "../../config";
import ClaimBox from "./ClaimBox";
import ClaimsGridSkeleton from "./ClaimGridSkeleton";
import { Grid } from "@chakra-ui/react";
import { useQueryStringParameter } from "../../utils/useQueryStringParameter";

export default function ClaimsList({ page }: { page: number }) {
  const orderBy = useQueryStringParameter<ClaimsOrderBy>(
    "orderBy",
    "timestamp_desc"
  );

  console.log("ClaimsList -> orderBy", orderBy);

  page = page || 1;
  const { data, isPending, error } = useAllClaims(
    CLAIMS_PER_PAGE,
    (page - 1) * CLAIMS_PER_PAGE,
    orderBy
  );

  if (isPending) return <ClaimsGridSkeleton />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5} p={5} w="100%">
      {data.hypercertsCollection?.edges.map((edge, i) => (
        <ClaimBox data={edge.node} key={i} />
      ))}
    </Grid>
  );
}
