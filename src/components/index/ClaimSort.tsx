import { Button, Flex, Menu, MenuButton, MenuList } from "@chakra-ui/react";

import { AllClaimsSort } from "../../hypercerts/hooks/useClaims";
import { FaSortAmountDown } from "react-icons/fa";
import MenuItem from "../ui/MenuItem";
import { useQueryStringParameter } from "../../utils/useQueryStringParameter";
import { useRouter } from "next/router";

export default function ClaimSort() {
  const router = useRouter();
  const sort = useQueryStringParameter<AllClaimsSort>("sort", "creation_asc");

  function click(sort: string) {
    router.push({
      query: {
        ...router.query,
        sort: sort,
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
          onClick={() => click("creation_asc")}
          selected={sort === "creation_asc"}
        >
          Created: New-Old
        </MenuItem>
        <MenuItem
          onClick={() => click("creation_desc")}
          selected={sort === "creation_desc"}
        >
          Created: Old-New
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
