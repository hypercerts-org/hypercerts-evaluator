import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ClaimsSearch() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push({
        query: { search, p: 1 },
      });
    }
  };

  return (
    <Box
      borderBottom={"1px solid black"}
      padding={"20px"}
      borderLeft={"1px solid black"}
      borderRight={"1px solid black"}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch />
        </InputLeftElement>
        <Input
          placeholder="Search"
          variant={"black"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </InputGroup>
    </Box>
  );
}
