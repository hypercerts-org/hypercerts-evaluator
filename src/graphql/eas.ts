import { initGraphQLTada } from "gql.tada";
import { introspection } from "../graphql-eas-env";

export const gqlEas = initGraphQLTada<{
  introspection: introspection;
}>();

export type { FragmentOf, ResultOf, VariablesOf } from "gql.tada";
export { readFragment } from "gql.tada";
