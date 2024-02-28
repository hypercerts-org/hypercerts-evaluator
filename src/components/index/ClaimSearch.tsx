import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";

export default function ClaimSearch() {
  return (
    <Box borderBottom={"1px solid black"} padding={"20px"}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch />
        </InputLeftElement>
        <Input placeholder="Search" variant={"black"} />
      </InputGroup>
    </Box>
  );
}
