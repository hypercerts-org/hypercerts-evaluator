import { FragmentOf, readFragment } from "gql.tada";
import { Text, VStack } from "@chakra-ui/react";

import EthAddress from "../EthAddress";
import { FullClaimFragment } from "../../claims/fragments";
import { isAddress } from "viem";

export default function ClaimContributors({
  claim,
  ...props
}: {
  claim: FragmentOf<typeof FullClaimFragment>;
  [key: string]: any;
}) {
  let _claim = readFragment(FullClaimFragment, claim);

  const contributors = _claim.metadata?.contributors;
  return (
    <VStack
      p={5}
      alignItems={"flex-start"}
      width="100%"
      {...props}
      textOverflow={"ellipsis"}
      overflow={"hidden"}
    >
      <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
        Contributors
      </Text>
      <Text>
        {contributors?.map((c, i) => {
          if (!c) return null;
          if (isAddress(c)) return <EthAddress address={c} key={i} />;
          return c;
        })}
      </Text>
    </VStack>
  );
}
