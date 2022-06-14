import { Flex, Heading, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";

export function About() {
  return (
    <Flex
      w="100%"
      maxW="1440px"
      mt={["10","20"]}
      mx="auto"
    >
      <SimpleGrid
        columns={[1,2]}
        spacing="20"
      >
        <Text textAlign="justify" fontSize="24">
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>    

        <Stack
          direction={"row"}
          justify="space-between"
          align="center"
          w="100%"
        >
          <VStack>
            <Heading color="highlight" fontSize="48">50</Heading>
            <Text 
              color="heading"
              fontSize="24"
              fontWeight="semibold"
            >
              países
            </Text>
          </VStack>
          <VStack>
            <Heading color="highlight" fontSize="48">60</Heading>
            <Text 
              color="heading"
              fontSize="24"
              fontWeight="semibold"
            >
              línguas
            </Text>
          </VStack>

          <VStack>
            <Heading color="highlight" fontSize="48">27</Heading>
            <Text 
              color="heading"
              fontSize="24"
              fontWeight="semibold"
            >
              cidades +100
            </Text>
          </VStack>

        </Stack> 
      </SimpleGrid>
    </Flex>
  )
}