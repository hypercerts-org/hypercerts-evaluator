import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import ClaimSort from "./ClaimSort";
import { FaFilter } from "react-icons/fa";

export default function ClaimsSortFilter() {
  return (
    <Box p={5}>
      <Flex gap="5" justifyContent={"flex-end"}>
        <ClaimSort />
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaFilter />}
            variant="blackAndWhiteOutline"
            size={"sm"}
          >
            Filter
          </MenuButton>
          <MenuList>
            <MenuItem>…</MenuItem>
            <MenuItem>…</MenuItem>
            <MenuItem>…</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
