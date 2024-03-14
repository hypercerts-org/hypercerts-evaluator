import { Box, Flex } from "@chakra-ui/react";

import ClaimsFilter from "./ClaimsFilter";
import ClaimsOrderBy from "./ClaimsOrderBy";

export default function ClaimsSortFilter() {
  return (
    <Box p={5}>
      <Flex gap="5" justifyContent={"flex-end"}>
        <ClaimsOrderBy />
        <ClaimsFilter />
      </Flex>
    </Box>
  );
}
