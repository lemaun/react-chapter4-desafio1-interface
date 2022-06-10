import { Flex, Icon } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";

export function BackLink() {
  return (
    <Flex>
      <Icon as={RiArrowLeftSLine} fontSize="30" color="heading" />
    </Flex>
  )
}