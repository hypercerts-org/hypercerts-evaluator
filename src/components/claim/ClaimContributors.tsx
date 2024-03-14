import { FragmentOf, readFragment } from "gql.tada";
import { List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";

import EthAddress from "../ui/EthAddress";
import { FaUser } from "react-icons/fa";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { isAddress } from "viem";

export default function ClaimContributors({
  claim,
  ...props
}: {
  claim: FragmentOf<typeof FullClaimFragment>;
  [key: string]: any;
}) {
  let _claim = readFragment(FullClaimFragment, claim);

  const contributors = _claim.contributors;
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
      <List spacing={2}>
        {contributors?.map((c, i) => {
          if (!c) return null;
          if (isAddress(c))
            return (
              <ListItem key={i}>
                <EthAddress address={c} key={i} />
              </ListItem>
            );
          return (
            <ListItem key={i}>
              <ListIcon
                as={FaUser}
                color="gray.500"
                style={{ width: "15px", height: "15px" }}
                mb={"3px"}
              />
              {c}
            </ListItem>
          );
        })}
      </List>
    </VStack>
  );
}
