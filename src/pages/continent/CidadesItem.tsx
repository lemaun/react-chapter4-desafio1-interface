import { Text, Image, Flex, Box } from "@chakra-ui/react";

export function CidadesItem() {
  return (
    <Flex
      direction="column"
      bgColor="white"
      border="1px solid"
      borderColor="highlight50"
      borderRadius={5}
    >
      <Image src="/images/cities/london.png"  alt="london" mb="4" w="100%"/>
      <Flex alignItems="center" justify="space-between" gap="2" mb='4' px="8">
        <Box>
          <Text 
            color="heading"
            fontSize="20"
            fontWeight="semibold"
            mb="4"
            >
            Londres  
          </Text>
          <Text 
            color="gray.200"
            fontSize="16"
            fontWeight="400"
            >
            Reino Unido  
          </Text>
        </Box>
        
        <Box>

          <Image
            borderRadius='full'
            boxSize='30px'
            src='/images/flags/london.png'
            alt='london'
          />
        </Box>
      </Flex>
    </Flex>
  )
}