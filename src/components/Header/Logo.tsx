import { Flex, Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <Flex alignSelf="center" justify="center" h={[5,10]} w="100%">
      <Image src="/images/Logo.png" alt="Logo" />
    </Flex>
  )
}