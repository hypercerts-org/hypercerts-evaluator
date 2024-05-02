import * as R from "remeda";

import { HYPERCERTS_API_URL } from "../../config";
import { HypercertListFragment } from "../fragments/hypercert-list.fragment";
import { VariablesOf } from "gql.tada";
import { gqlHypercerts } from "../../graphql/hypercerts";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

export type ClaimsOrderBy =
  | "timestamp_asc"
  | "timestamp_desc"
  | "name_asc"
  | "name_desc";

export type ClaimsFilter = "all" | "evaluated";

const query = gqlHypercerts(
  `
    query AllHypercerts($offset: Int, $limit: Int, $where: HypercertsWhereInput! ) {
      hypercerts(page: { offset: $offset, limit: $limit }, where: $where) {
        totalCount
        data {
          ...HypercertListFragment
        }
      }
    }
  `,
  [HypercertListFragment]
);

type VariableTypes = VariablesOf<typeof query>;

// function createOrderBy({
//   orderBy,
// }: {
//   orderBy?: ClaimsOrderBy;
// }): VariableTypes["orderBy"] {
//   if (orderBy) {
//     const orderByAttribute = orderBy.split("_")[0];
//     const orderByDirection = orderBy.split("_")[1];
//     if (orderByAttribute === "timestamp") {
//       return [
//         {
//           block_timestamp:
//             orderByDirection === "asc" ? "AscNullsFirst" : "DescNullsFirst",
//         },
//       ];
//     }
//     if (orderByAttribute === "name") {
//       return [
//         {
//           name: orderByDirection === "asc" ? "AscNullsFirst" : "DescNullsFirst",
//         },
//       ];
//     }
//   }

//   return [];
// }

// function createFilter({
//   filter,
//   search,
// }: {
//   filter?: ClaimsFilter;
//   search?: string;
// }): VariableTypes["where"] {
//   if (search && search.length > 2) {
//     // Don't treat hex strings as numbers
//     // if (!search.startsWith("0x")) {
//     //   const searchNumber = Number.parseInt(search);
//     //   if (R.isNumber(searchNumber)) {
//     //     return {
//     //       id: { eq: searchNumber },
//     //     };
//     //   }
//     // }
//     return { name: { ilike: `%${search}%` } };
//   }
//   return {};
// }

export const useAllHypercerts = ({
  offset,
  limit,
  orderBy,
  filter,
  search,
}: {
  offset: number;
  limit: number;
  orderBy?: ClaimsOrderBy;
  filter?: ClaimsFilter; //TODO Implement filter
  search?: string;
}) => {
  return useQuery({
    queryKey: ["hypercerts", offset, limit, orderBy, filter, search],
    queryFn: async () => {
      // const _orderBy = createOrderBy({ orderBy });
      // const _filter = createFilter({ filter, search });

      return request(HYPERCERTS_API_URL, query, {
        offset,
        limit,
        where: {},
      });
    },
  });
};
