import { Flex, Text, VStack } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";

type Property = {
  value: string;
  trait_type: string;
  application?: string;
};

function isProperty(property: unknown): property is Property {
  if (typeof property !== "object") return false;
  if (property === null) return false;
  if (!("value" in property)) return false;
  if (!("trait_type" in property)) return false;
  if (typeof (property as any).value !== "string") return false;
  if (typeof (property as any).trait_type !== "string") return false;
  if (
    "application" in property &&
    typeof (property as any).application !== "string"
  )
    return false;
  return true;
}

function PropertyValue({ value }: { value: string }) {
  if (value.startsWith("http")) {
    return (
      <a href={value} target="_blank" rel="norefferer">
        {value}
      </a>
    );
  }
  return <>{value}</>;
}

function Property({ property }: { property: unknown }) {
  if (!isProperty(property)) return <Text>Invalid property</Text>;

  return (
    <Flex justifyContent={"space-between"} width={"100%"} fontSize={"sm"}>
      <Text>{property.trait_type}</Text>
      <Text>
        {property.application && `${property.application}, `}
        <PropertyValue value={property.value} />
      </Text>
    </Flex>
  );
}

export default function ClaimProperties({
  claim,
  ...props
}: {
  claim: FragmentOf<typeof FullClaimFragment>;
  [key: string]: any;
}) {
  let _claim = readFragment(FullClaimFragment, claim);

  const properties = _claim.properties;

  if (!Array.isArray(properties) || properties.length === 0)
    return (
      <VStack p={5} alignItems={"flex-start"} width="100%" {...props}>
        <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
          Properties
        </Text>
        <Text>No properties.</Text>
      </VStack>
    );

  return (
    <VStack p={5} alignItems={"flex-start"} width="100%" {...props}>
      <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
        Properties
      </Text>
      {properties.map((property, index) => (
        <Property key={index} property={property} />
      ))}
    </VStack>
  );
}
