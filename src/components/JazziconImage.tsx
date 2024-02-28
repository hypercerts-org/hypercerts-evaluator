import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Jazzicon } from "@ukstv/jazzicon-react";

export default function JazziconImage({
  address,
  ...props
}: {
  address: string;
  [key: string]: any;
}): JSX.Element {
  return (
    <Box
      style={{ width: "15px", height: "15px", marginBottom: "4px" }}
      {...props}
    >
      <Jazzicon address={address} />
    </Box>
  );
}
