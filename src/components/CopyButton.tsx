import { IconButton, useToast } from "@chakra-ui/react";

// import { CopyIcon } from "@chakra-ui/icons";
import { FaCopy } from "react-icons/fa6";

interface CopyButtonProps {
  textToCopy: string;
}

export function CopyButton({ textToCopy }: CopyButtonProps): JSX.Element {
  const toast = useToast();
  return (
    <IconButton
      aria-label="Search database"
      icon={<FaCopy />}
      onClick={(): void => {
        void navigator.clipboard.writeText(textToCopy);
        toast({
          title: "Copied.",
          status: "info",
          duration: 1000,
          position: "top",
        });
      }}
      display={"inline-block"}
      color={"gray.500"}
      size={"xs"}
      isRound={true}
      pl="6px"
    />
  );
}
