import { Box, Button, Flex } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { CLAIMS_PER_PAGE } from "../../config";
import { useRouter } from "next/router";

export default function ClaimsPagination({
  currentPage,
  totalCount,
}: {
  currentPage: number;
  totalCount?: number;
}) {
  const router = useRouter();

  const totalPages = Math.ceil((totalCount || 0) / CLAIMS_PER_PAGE);

  const navigate = (page: number) => {
    router.push({
      query: {
        ...router.query,
        p: page,
      },
    });
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="full"
      border={"1px solid black"}
      p={5}
    >
      <Flex alignItems="center" justifyContent="start" gap={2} w="250px">
        {/* First Button */}
        <Button
          display={currentPage > 1 ? "inline-block" : "none"}
          aria-label="First"
          leftIcon={<FaArrowLeft style={{ width: "10px", height: "10px" }} />}
          onClick={() => navigate(1)}
          variant="ghost"
        >
          First
        </Button>

        {/* Previous Button */}
        <Button
          display={currentPage > 1 ? "inline-block" : "none"}
          aria-label="Previous"
          leftIcon={<FaArrowLeft style={{ width: "10px", height: "10px" }} />}
          onClick={() => navigate(currentPage - 1)}
          variant="ghost"
        >
          Previous
        </Button>
      </Flex>

      {/* Current Page Info */}
      <Box pt="1" fontSize="sm" color="gray.500" whiteSpace="nowrap">
        {currentPage} of {totalPages}
      </Box>

      <Flex alignItems="center" justifyContent="end" gap={2} w="250px">
        {/* Next Button */}
        <Button
          display={currentPage < totalPages ? "inline-block" : "none"}
          aria-label="Next"
          rightIcon={<FaArrowRight style={{ width: "10px", height: "10px" }} />}
          onClick={() => navigate(currentPage + 1)}
          variant="ghost"
        >
          Next
        </Button>{" "}
        {/* Last Button */}
        <Button
          display={currentPage < totalPages ? "inline-block" : "none"}
          aria-label="Last"
          rightIcon={<FaArrowRight style={{ width: "10px", height: "10px" }} />}
          onClick={() => navigate(totalPages)}
          variant="ghost"
        >
          Last
        </Button>
      </Flex>
    </Flex>
  );
}
