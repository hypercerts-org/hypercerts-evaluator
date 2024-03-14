import { FragmentOf, readFragment } from "gql.tada";
import { List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";

import { AttestContext } from "../../pages/claim/[id]";
import EthAddress from "../ui/EthAddress";
import { FaUser } from "react-icons/fa";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { isAddress } from "viem";
import { useContext } from "react";

export default function ClaimContributors({
  ...props
}: {
  [key: string]: any;
}) {
  const attestContext = useContext(AttestContext);
  const claim = readFragment(FullClaimFragment, attestContext?.claim);
  if (!claim) return null;

  const contributors = claim.contributors;
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
