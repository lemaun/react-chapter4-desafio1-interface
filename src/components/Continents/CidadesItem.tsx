import { Text, Image, Flex, Box } from "@chakra-ui/react";

interface CidadeProps {
  nome:string;
  pais:string;
  img:string;
  bandeira:string;
}

export function CidadesItem({ nome, pais, img, bandeira }: CidadeProps ) {
  return (
    <Flex
      direction="column"
      bgColor="white"
      border="1px solid"
      borderColor="highlight50"
      borderRadius={5}
    >
      <Image src={img}  alt={nome} mb="4" w="100%"/>
      <Flex alignItems="center" justify="space-between" gap="2" mb='4' px="8">
        <Box>
          <Text 
            color="heading"
            fontSize="20"
            fontWeight="semibold"
            mb="4"
            >
            {nome}  
          </Text>
          <Text 
            color="gray.200"
            fontSize="16"
            fontWeight="400"
            >
            {pais}  
          </Text>
        </Box>
        
        <Box>

          <Image
            borderRadius='full'
            boxSize='30px'
            src={bandeira}
            alt={nome}
          />
        </Box>
      </Flex>
    </Flex>
  )
}