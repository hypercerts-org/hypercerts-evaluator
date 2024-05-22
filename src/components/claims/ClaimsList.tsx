import { Box, Grid, Text } from "@chakra-ui/react";
import {
  ClaimsFilter,
  ClaimsOrderBy,
  useAllHypercerts,
} from "../../hypercerts/hooks/useAllHypercerts";

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
  const filter = useQueryStringParameter<ClaimsFilter>("filter", "all");
  const search = useQueryStringParameter<string>("search", "");

  page = page || 1;
  const { data, isPending, error } = useAllHypercerts({
    offset: (page - 1) * CLAIMS_PER_PAGE,
    first: CLAIMS_PER_PAGE,
    orderBy,
    search,
    filter,
  });

  if (isPending) return <ClaimsGridSkeleton />;

  if (error) return "An error has occurred: " + error.message;

  const totalCount = data.hypercerts.count;
  const hypercertsData = data.hypercerts.data;

  if (!hypercertsData || !totalCount) return "No data found.";

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

      {hypercertsData && hypercertsData.length === 0 && (
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
        {hypercertsData.map((cert, i) => (
          <ClaimsListBox data={cert} key={i} />
        ))}
      </Grid>

      {typeof totalCount !== "undefined" && totalCount > 0 && (
        <ClaimsPagination currentPage={page} totalCount={totalCount} />
      )}
    </>
  );
}
