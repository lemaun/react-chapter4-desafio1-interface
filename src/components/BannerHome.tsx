import { Box, Container, Flex, Heading, Hide, Image, Stack, Text } from '@chakra-ui/react';

export function BannerHome() {
  return (
    <Box
      as="section"
      pb={[0,24]}
      maxH={["163","368"]}
    >
      <Box 
        bgImage="url('./images/bg-banner.jpg')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        h={["163","368"]}
        color="gray.50"
      >
        <Container display="flex" alignItems="center" justifyContent="space-between" w="100%" h="100%" maxW="1440" position="relative">
          <Stack spacing={[1,8]} maxW={["1440","550"]}>
            <Heading fontWeight="medium" fontSize={[20,36]} lineHeight={["30px","55px"]}>
              5 Continentes,<br/>infinitas possibilidades.
            </Heading>
            
            <Heading fontSize={["sm","xl"]} fontWeight="300"  lineHeight={["1.6","8"]} >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Heading>
            
          </Stack>
          <Hide below="sm">
            <Box mt="150px">
              <Image src="./images/Airplane.png" alt="airplane" />
            </Box>
          </Hide>
        </Container>
      </Box>
    </Box>
  );
};