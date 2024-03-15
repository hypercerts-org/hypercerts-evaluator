import { Box, Grid, Text } from "@chakra-ui/react";
import { ClaimsOrderBy, useAllClaims } from "../../hypercerts/hooks/useClaims";

import { CLAIMS_PER_PAGE } from "../../config";
import ClaimsGridSkeleton from "./ClaimGridSkeleton";
import ClaimsListBox from "./ClaimsListBox";
import ClaimsPagination from "./ClaimsPagination";
import LoadError from "../LoadError";
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

  const totalCount = data.hypercertsCollection?.totalCount;
  const edges = data.hypercertsCollection?.edges;
  return (
    <>
      {search && search.length > 2 && (
        <Text
          px={5}
          borderLeft={"1px solid black"}
          borderRight={"1px solid black"}
        >
          Showing search results for <strong>{search}</strong>
        </Text>
      )}

      {edges && edges.length === 0 && (
        <Box
          p={5}
          borderBottom={"1px solid black"}
          borderLeft={"1px solid black"}
          borderRight={"1px solid black"}
        >
          <LoadError>
            No Hypercerts found for the current search and filter criteria.
          </LoadError>
        </Box>
      )}

      <Grid
        templateColumns="repeat(3, 1fr)"
        w="100%"
        borderLeft={"1px solid black"}
        borderRight={"1px solid black"}
      >
        {data.hypercertsCollection?.edges.map((edge, i) => (
          <ClaimsListBox data={edge.node} key={i} />
        ))}
      </Grid>

      {typeof totalCount !== "undefined" && totalCount > 0 && (
        <ClaimsPagination
          currentPage={page}
          totalCount={data.hypercertsCollection?.totalCount}
        />
      )}
    </>
  );
}
