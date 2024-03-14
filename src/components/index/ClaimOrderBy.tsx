import { Button, Flex, Menu, MenuButton, MenuList } from "@chakra-ui/react";

import { AllClaimsOrderBy } from "../../hypercerts/hooks/useClaims";
import { FaSortAmountDown } from "react-icons/fa";
import MenuItem from "../ui/MenuItem";
import { useQueryStringParameter } from "../../utils/useQueryStringParameter";
import { useRouter } from "next/router";

export default function ClaimOrderBy() {
  const router = useRouter();
  const orderBy = useQueryStringParameter<AllClaimsOrderBy>(
    "orderBy",
    "timestamp_desc"
  );

  function click(orderBy: string) {
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
