import { Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { CategoryItem } from "./CategoryItem";

export function Categories() {
  return (
    <Flex
      w="100%"
      maxW="1440px"
      mt="40"
      mx="auto"
    >
      <Stack
        direction={["column","row"]}
        // spacing="6"
        justify="space-between"
        align="center"
        w="100%"
      >
        <CategoryItem category={"vida noturna"} icon={"cocktail"}/>
        <CategoryItem category={"praia"} icon={"surf"}/>
        <CategoryItem category={"moderno"} icon={"building"}/>
        <CategoryItem category={"clássico"} icon={"museum"}/>
        <CategoryItem category={"e mais..."} icon={"earth"}/>
        
      </Stack>
    </Flex>
  )
}