import { Flex, Spacer, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BackLink } from "./BackLink";
import { Logo } from "./Logo";


export function Header() {
  const isWideVersion = useBreakpointValue ({
    base: false,
    lg: true
  })

  const { asPath } = useRouter()
  let isActive = false
  if (asPath !== '/'){
    isActive = true
  }

  return (
    <Flex 
      as="header"
      w="100%"
      maxWidth={1440}
      mx="auto"
      my="8"
      px="6"
      align="center"
    >
      {isActive && <BackLink />}
      <Logo />
    </Flex>
  )
}