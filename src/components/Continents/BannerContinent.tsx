import { Box, Container, Heading } from '@chakra-ui/react';

interface BannerProps {
  banner: string,
  name: string,
}

export function BannerContinent({banner, name}: BannerProps) {
  return (
    <Box
      as="section"
      maxH="500px"
    >
      <Box 
        bgImage={banner}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        h={["150","500"]}
        color="gray.50"
      >
        <Container display="flex" alignItems={["center","end"]} justifyContent={["center","start"]} w="100%" h="100%" maxW="1440" pb={["0","10"]} position="relative">
          
            <Heading fontWeight="medium" fontSize={["36","48"]}>
              {name}
            </Heading>
          
        </Container>
      </Box>
    </Box>
  );
};