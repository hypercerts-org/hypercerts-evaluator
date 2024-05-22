import {
  Button,
  Flex,
  List,
  ListIcon,
  ListItem,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaChevronDown, FaUser } from "react-icons/fa";
import { useContext, useState } from "react";

import { AttestContext } from "../../pages/claim/[id]";
import { ClaimContributorsModal } from "./ClaimContributorsModal";
import EthAddress from "../ui/EthAddress";
import { HypercertFullFragment } from "../../hypercerts/fragments/hypercert-full.fragment";
import { isAddress } from "viem";
import { readFragment } from "gql.tada";

const MAX_CONTRIBUTORS_DISPLAYED = 5;

export default function ClaimContributors({
  ...props
}: {
  [key: string]: any;
}) {
  const [contributorDialogOpen, setContributorDialogOpen] = useState(false);
  const attestContext = useContext(AttestContext);
  const claim = readFragment(HypercertFullFragment, attestContext?.claim);
  if (!claim) return null;
  const contributors = claim.metadata?.contributors;
  if (!contributors) return null;
  return (
    <VStack
      p={5}
      alignItems={"flex-start"}
      width="100%"
      {...props}
      textOverflow={"ellipsis"}
      overflow={"hidden"}
    >
      <Flex width="100%" justifyContent="space-between">
        <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
          Contributors
        </Text>
        {contributors.length > MAX_CONTRIBUTORS_DISPLAYED && (
          <Tag size={"sm"} borderRadius="full">
            <TagLabel>{contributors.length}</TagLabel>
          </Tag>
        )}
      </Flex>

      <List spacing={2}>
        {contributors?.slice(0, MAX_CONTRIBUTORS_DISPLAYED).map((c, i) => {
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
      <Flex width="100%" justifyContent="center">
        <Button
          aria-label="More"
          visibility={
            contributors?.length > MAX_CONTRIBUTORS_DISPLAYED
              ? "visible"
              : "hidden"
          }
          rightIcon={
            <FaChevronDown style={{ width: "10px", height: "10px" }} />
          }
          onClick={() => setContributorDialogOpen(true)}
          variant="ghost"
          size="sm"
        >
          More
        </Button>
      </Flex>
      <ClaimContributorsModal
        isOpen={contributorDialogOpen}
        onClose={() => setContributorDialogOpen(false)}
      />
    </VStack>
  );
}
