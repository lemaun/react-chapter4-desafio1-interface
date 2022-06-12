import { Divider, Box, Heading, VStack } from "@chakra-ui/react";
import { BannerSwiper } from "./BannerSwiper";


export function SwiperBanner() {
  return (
    <Box
      as="section"
      w="100%"
      maxW="1440px"
      mx="auto"
      my="120px"
    >
      <VStack
        w="100%"
        justify="center"
        color="heading"
        textAlign="center"
        mb="80px"
      >
        <Divider w="120px" mb="10" border="2px" borderColor="heading"  />
        <Heading fontSize="36" lineHeight="54px" fontWeight="500">Vamos Nessa?<br />Então escolha seu continente</Heading>
      </VStack>

      <BannerSwiper />
    </Box>
  )
}