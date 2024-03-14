import { Button, Flex, Menu, MenuButton, MenuList } from "@chakra-ui/react";

import { ClaimsOrderBy } from "../../hypercerts/hooks/useClaims";
import { FaSortAmountDown } from "react-icons/fa";
import MenuItem from "../ui/MenuItem";
import { useQueryStringParameter } from "../../utils/useQueryStringParameter";
import { useRouter } from "next/router";

export default function ClaimsOrderBy() {
  const router = useRouter();
  const orderBy = useQueryStringParameter<ClaimsOrderBy>(
    "orderBy",
    "timestamp_desc"
  );

  function click(orderBy: ClaimsOrderBy) {
    router.push({
      query: {
        ...router.query,
        orderBy,
        p: 1,
      },
    });
  }

  return (
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
        <MenuItem
          onClick={() => click("timestamp_desc")}
          selected={orderBy === "timestamp_desc"}
        >
          Created: New-Old
        </MenuItem>
        <MenuItem
          onClick={() => click("timestamp_asc")}
          selected={orderBy === "timestamp_asc"}
        >
          Created: Old-New
        </MenuItem>
        <MenuItem
          onClick={() => click("name_asc")}
          selected={orderBy === "name_asc"}
        >
          Name: A-Z
        </MenuItem>
        <MenuItem
          onClick={() => click("name_desc")}
          selected={orderBy === "name_desc"}
        >
          Name: Z-A
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
