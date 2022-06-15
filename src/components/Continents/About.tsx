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
      my={["6","20"]}
      mx="auto"
      px={[5,0]}
    >
      <SimpleGrid
        columns={[1,2]}
        spacing={["5","20"]}
      >
        <Text textAlign="justify" fontSize={["14","24"]}>
          {sobre}
        </Text>    

        <Stack
          direction={"row"}
          justify="space-between"
          align="center"
          w="100%"
        >
          <Flex justifyContent={["start","center"]} direction={"column"}>
            <Heading color="highlight" fontSize={["24","48"]}>{indices.countries}</Heading>
            <Text 
              color="heading"
              fontSize={["18","24"]}
              fontWeight={["normal","semibold"]}
            >
              países
            </Text>
          </Flex>
          <Flex justifyContent={["start","center"]} direction={"column"}>
            <Heading color="highlight" fontSize={["24","48"]}>{indices.laguages}</Heading>
            <Text 
              color="heading"
              fontSize={["18","24"]}
              fontWeight={["normal","semibold"]}
            >
              línguas
            </Text>
          </Flex>

          <Flex justifyContent={["start","center"]} direction={"column"}>
            <Heading color="highlight" fontSize={["24","48"]}>{indices.cities}</Heading>
            <Text 
              color="heading"
              fontSize={["18","24"]}
              fontWeight={["normal","semibold"]}
            >
              cidades +100
              <Tooltip label={`As ${indices.cities} melhores cidades para visitar`} hasArrow>
                <span><Icon as={RiInformationLine} color='gray.200' fontSize={['xs','lg']} ml='2'/></span>
              </Tooltip>
            </Text>
          </Flex>

        </Stack> 
      </SimpleGrid>
    </Flex>
  )
}