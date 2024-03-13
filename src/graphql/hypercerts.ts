import { initGraphQLTada } from "gql.tada";
import { introspection } from "../graphql-hypercerts-env";

export const gqlHypercerts = initGraphQLTada<{
  introspection: introspection;
}>();

export type { FragmentOf, ResultOf, VariablesOf } from "gql.tada";
export { readFragment } from "gql.tada";
