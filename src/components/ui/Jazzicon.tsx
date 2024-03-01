import { Box } from "@chakra-ui/react";
import { Jazzicon as _Jazzicon } from "@ukstv/jazzicon-react";

export default function Jazzicon({
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
      <_Jazzicon address={address} />
    </Box>
  );
}
