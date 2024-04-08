import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";
import { useQueryStringParameter } from "../../utils/useQueryStringParameter";
import { useRouter } from "next/router";

export default function ClaimsSearch() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const searchQuerystring = useQueryStringParameter<string>("search", "");

  useEffect(() => {
    setSearch(searchQuerystring);
  }, [searchQuerystring]);

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
