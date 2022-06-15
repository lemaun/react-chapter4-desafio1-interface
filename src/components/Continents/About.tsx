import { Flex, Heading, Icon, SimpleGrid, Stack, Text, Tooltip, VStack } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface AboutProps {
  sobre: string;
  indices: {
    countries: number;
    laguages: number;
    cities: number;
  }
}

export function About({sobre, indices}: AboutProps) {
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
          {sobre}
        </Text>    

        <Stack
          direction={"row"}
          justify="space-between"
          align="center"
          w="100%"
        >
          <VStack>
            <Heading color="highlight" fontSize="48">{indices.countries}</Heading>
            <Text 
              color="heading"
              fontSize="24"
              fontWeight="semibold"
            >
              países
            </Text>
          </VStack>
          <VStack>
            <Heading color="highlight" fontSize="48">{indices.laguages}</Heading>
            <Text 
              color="heading"
              fontSize="24"
              fontWeight="semibold"
            >
              línguas
            </Text>
          </VStack>

          <VStack>
            <Heading color="highlight" fontSize="48">{indices.cities}</Heading>
            <Text 
              color="heading"
              fontSize="24"
              fontWeight="semibold"
            >
              cidades +100
              <Tooltip label={`As ${indices.cities} melhores cidades para visitar`} hasArrow>
                <span><Icon as={RiInformationLine} color='gray.200' fontSize='lg' ml='2'/></span>
              </Tooltip>
            </Text>
          </VStack>

        </Stack> 
      </SimpleGrid>
    </Flex>
  )
}