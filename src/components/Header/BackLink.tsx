import { Box, Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

export function BackLink() {
  return (
    <Flex>
      <Box as="a" href="/">
        <Icon as={RiArrowLeftSLine} fontSize="30" color="heading" />
      </Box>
    </Flex>
  )
}