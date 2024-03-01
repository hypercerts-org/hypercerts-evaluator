"use client";

import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { SvgIcon } from "./SvgIcon";
import { useState } from "react";

type ImageIconProps = {
  url: string;
  size?: "tiny" | "small" | "large" | "huge";
};

const sizeInPx = (size: ImageIconProps["size"]) => {
  if (size === "tiny") {
    return "15px";
  }
  if (size === "large") {
    return "40px";
  }
  if (size === "huge") {
    return "100px";
  }
  return "25px";
};

export function ImageIcon({ url, size = "small" }: ImageIconProps) {
  const [imageLoadError, setImageLoadError] = useState<boolean>(false);

  if (imageLoadError) {
    return <SvgIcon />;
  }

  return (
    <Flex alignItems={"center"} justifyContent={"center"} position={"relative"}>
      <Image
        src={url}
        onError={(): void => setImageLoadError(true)}
        alt="avatar"
        width={60}
        height={60}
        style={{
          objectFit: "cover",
          borderRadius: "100%",
          width: sizeInPx(size),
          height: sizeInPx(size),
        }}
      />
    </Flex>
  );
}
