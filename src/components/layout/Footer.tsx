import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Flex flexDirection="column" alignItems="center" pb="10">
        <a href="https://hypercerts.org/" target="_blank">
          <Image
            src="/hypercerts_logo.svg"
            alt="Hypercerts Logo"
            width={30}
            height={30}
          />
        </a>
        <Flex gap={5} mt={5}>
          <a href="https://discord.gg/UZt8cBnP4w" target="_blank">
            <FaDiscord />
          </a>
          <a
            href="https://github.com/hypercerts-org/hypercerts"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a href="https://t.me/+YF9AYb6zCv1mNDJi" target="_blank">
            <FaTelegramPlane />
          </a>
          <a href="https://twitter.com/hypercerts" target="_blank">
            <FaTwitter />
          </a>
        </Flex>
      </Flex>
    </footer>
  );
}
