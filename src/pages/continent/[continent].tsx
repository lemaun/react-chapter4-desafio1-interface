import { Box, Flex, Heading } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { BannerContinent } from "./BannerContinent";
import { About } from "./About";

export default function Continent() {
  return (
    <Flex direction="column" h="100%">
      <Header />
      <BannerContinent />
      <About />
      <Box
        as="section"
        w="100%"
        maxW="1440px"
        mx="auto"
        my="20"
      >
                 
        <Heading fontSize="36" lineHeight="54px" fontWeight="500">Cidades +100</Heading>
        

      </Box>
    </Flex>
  )
}