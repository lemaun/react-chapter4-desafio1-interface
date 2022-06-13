import { Flex, Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <Flex alignSelf="center" justify="center" w="100%">
      <Image src="/images/Logo.png" alt="Logo" />
    </Flex>
  )
}