import { Box, Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

export function BannerHome() {
  return (
    <Box
      as="section"
      pb={["12","24"]}
      maxH="368px"
    >
      <Box 
        bgImage="url('./bg-banner.jpg')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        h={["240","368"]}
      >
        <Container display="flex" alignItems="center" justifyContent="space-between" w="100%" h="100%" maxW="1440" position="relative">
          <Stack spacing={8} maxW="550">
            <Heading fontWeight="medium" lineHeight="55px">
              5 Continentes,<br/>infinitas possibilidades.
            </Heading>
            <Heading fontSize="xl" fontWeight="300"  lineHeight="8">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Heading>
          </Stack>
          <Box mt="150px">
            <Image src="./Airplane.png" alt="airplane" />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};