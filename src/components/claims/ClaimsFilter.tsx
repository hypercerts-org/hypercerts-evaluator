import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";

import { ClaimsFilter } from "../../hypercerts/hooks/useAllHypercerts";
import { FaFilter } from "react-icons/fa";
import MenuItem from "../ui/MenuItem";
import { useQueryStringParameter } from "../../utils/useQueryStringParameter";
import { useRouter } from "next/router";

export default function ClaimsFilter() {
  const router = useRouter();
  const filter = useQueryStringParameter<ClaimsFilter>("filter", "all");

  function click(filter: ClaimsFilter) {
    router.push({
      query: {
        ...router.query,
        filter,
        p: 1,
      },
    });
  }

  return (
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
        <MenuItem onClick={() => click("all")} selected={filter === "all"}>
          Show all
        </MenuItem>
        <MenuItem
          onClick={() => click("evaluated")}
          selected={filter === "evaluated"}
        >
          Hide Hypercerts with no evaluations
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
