import { ClaimsOrderBy, useAllClaims } from "../../hypercerts/hooks/useClaims";
import { Grid, Text } from "@chakra-ui/react";

import { CLAIMS_PER_PAGE } from "../../config";
import ClaimBox from "./ClaimBox";
import ClaimsGridSkeleton from "./ClaimGridSkeleton";
import { useQueryStringParameter } from "../../utils/useQueryStringParameter";

export default function ClaimsList({ page }: { page: number }) {
  const orderBy = useQueryStringParameter<ClaimsOrderBy>(
    "orderBy",
    "timestamp_desc"
  );
  const search = useQueryStringParameter<string>("search", "");

  page = page || 1;
  const { data, isPending, error } = useAllClaims({
    first: CLAIMS_PER_PAGE,
    offset: (page - 1) * CLAIMS_PER_PAGE,
    orderBy,
    search,
  });

  if (isPending) return <ClaimsGridSkeleton />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {search && search.length > 2 && (
        <Text px={5}>
          Showing search results for <strong>{search}</strong>
        </Text>
      )}
      <Grid templateColumns="repeat(3, 1fr)" gap={5} p={5} w="100%">
        {data.hypercertsCollection?.edges.map((edge, i) => (
          <ClaimBox data={edge.node} key={i} />
        ))}
      </Grid>
    </>
  );
}
