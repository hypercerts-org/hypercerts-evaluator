import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS

import {
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { AttestContext } from "../../pages/claim/[id]";
import EthAddress from "../ui/EthAddress";
import { FaUser } from "react-icons/fa";
import { HypercertFullFragment } from "../../hypercerts/fragments/hypercert-full.fragment";
import { isAddress } from "viem";
import { readFragment } from "gql.tada";
import { useContext } from "react";

export function ClaimContributorsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const attestContext = useContext(AttestContext);
  const claim = readFragment(HypercertFullFragment, attestContext?.claim);
  if (!claim) return null;

  const contributors = claim.metadata?.contributors;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textStyle={"secondary"} fontWeight={"100"}>
          Contributors
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
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
          </List>{" "}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
