import { Box, Flex, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import { CategoryItem } from "./CategoryItem";

export function Categories() {
  return (
    <Flex
      w="100%"
      maxW="1440px"
      mt={["10","40"]}
      mx="auto"
    >
      <SimpleGrid
        w="100%"
        columns={[2,3,5]}
        spacing={["5","20"]}
        px={[10,0]}
      >
        <CategoryItem category={"vida noturna"} icon={"cocktail"}/>
        <CategoryItem category={"praia"} icon={"surf"}/>
        <CategoryItem category={"moderno"} icon={"building"}/>
        <CategoryItem category={"clássico"} icon={"museum"}/>
        <CategoryItem category={"e mais..."} icon={"earth"}/>
        
      </SimpleGrid>
    </Flex>
  )
}