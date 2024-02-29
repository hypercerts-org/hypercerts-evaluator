import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";

import { FaFilter } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";

export default function ClaimsSortFilter() {
  return (
    <Box pt={10} pr={10}>
      <Flex gap="5" justifyContent={"flex-end"}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaSortAmountDown />}
            variant="blackAndWhiteOutline"
            size={"sm"}
          >
            Sort
          </MenuButton>
          <MenuList>
            <MenuItem>Name: A→Z</MenuItem>
            <MenuItem>Name: Z→A</MenuItem>
          </MenuList>
        </Menu>
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
