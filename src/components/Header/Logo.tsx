import { Flex, Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <Flex alignSelf="center" justify="center" w="100%">
      <Image src="./Logo.png" alt="Logo" />
    </Flex>
  )
}