import { mainnet, useEnsAvatar, useEnsName } from "wagmi";

import { ImageIcon } from "./user-icon/ImageIcon";
import React from "react";
import { SvgIcon } from "./user-icon/SvgIcon";

type UserIconProps = {
  address?: string;
  variant?: "round" | "square";
  size?: "tiny" | "small" | "large";
  className?: string;
  plusOne?: boolean;
};

export function UserIconInner({ address, size = "small" }: UserIconProps) {
  const { data: username } = useEnsName({
    address: address as `0x${string}`,
    chainId: mainnet.id,
  });
  const { data: avatarUrl } = useEnsAvatar({
    name: username,
    chainId: mainnet.id,
  });

  if (!address || !avatarUrl) {
    return <SvgIcon size={size} />;
  }

  return <ImageIcon url={avatarUrl} size={size} />;
}

export function UserIcon({ address, size = "small" }: UserIconProps) {
  return (
    <React.Suspense fallback={<SvgIcon size={size} />}>
      <UserIconInner address={address} size={size} />
    </React.Suspense>
  );
}
