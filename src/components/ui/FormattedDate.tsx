import * as R from "remeda";

import { Text } from "@chakra-ui/react";

export default function FormattedDate({
  seconds,
  ...props
}: {
  seconds: unknown | string | number;
}) {
  if (R.isString(seconds)) {
    seconds = Number.parseInt(seconds);
  }

  if (!R.isNumber(seconds)) {
    return (
      <Text fontSize="sm" opacity="50%">
        Invalid date
      </Text>
    );
  }

  const date = new Date(seconds * 1000);

  return (
    <Text fontSize="sm" opacity="50%" {...props}>
      {date.toISOString().substring(0, 10)}
    </Text>
  );
}
