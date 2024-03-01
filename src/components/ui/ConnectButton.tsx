import { Button, ButtonProps } from "@chakra-ui/react";

import { ConnectButton as ConnectButtonInternal } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export const ConnectButton = ({ ...buttonProps }: ButtonProps) => {
  return (
    <ConnectButtonInternal.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    {...buttonProps}
                    variant={"blackAndWhite"}
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    {...buttonProps}
                    variant={"blackAndWhite"}
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <Button
                    {...buttonProps}
                    onClick={openAccountModal}
                    type="button"
                    variant={"blackAndWhite"}
                  >
                    {account.displayName}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButtonInternal.Custom>
  );
};
