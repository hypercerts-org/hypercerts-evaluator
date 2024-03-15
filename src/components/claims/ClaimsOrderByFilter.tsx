import { Box, Flex } from "@chakra-ui/react";

import ClaimsFilter from "./ClaimsFilter";
import ClaimsOrderBy from "./ClaimsOrderBy";

export default function ClaimsSortFilter() {
  return (
    <Box p={5} borderLeft={"1px solid black"} borderRight={"1px solid black"}>
      <Flex gap="5" justifyContent={"flex-end"}>
        <ClaimsOrderBy />
        <ClaimsFilter />
      </Flex>
    </Box>
  );
}
