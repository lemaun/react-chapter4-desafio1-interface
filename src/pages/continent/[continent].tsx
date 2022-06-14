import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { BannerContinent } from "./BannerContinent";
import { About } from "./About";
import { CidadesItem } from "./CidadesItem";

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
        
        <SimpleGrid
          columns={[1,2,3,4]}
          spacing="20"
          mt="10"
        >
          <CidadesItem />
          <CidadesItem />
          <CidadesItem />
          <CidadesItem />
          <CidadesItem />
        </SimpleGrid>
      </Box>
    </Flex>
  )
}