import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react';

export function BannerContinent() {
  return (
    <Box
      as="section"
      maxH="500px"
    >
      <Box 
        bgImage="url('/images/bg-europa.png')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        h={["150","500"]}
        color="gray.50"
      >
        <Container display="flex" alignItems={["center","end"]} justifyContent={["center","start"]} w="100%" h="100%" maxW="1440" pb={["0","10"]} position="relative">
          
            <Heading fontWeight="medium" fontSize={["36","48"]}>
              Europa
            </Heading>
          
        </Container>
      </Box>
    </Box>
  );
};