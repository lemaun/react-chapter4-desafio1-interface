import { Divider, Box, Heading, VStack, Flex } from "@chakra-ui/react";
import { BannerSwiper } from "./BannerSwiper";


export function SwiperBanner() {
  return (
    <Box
      as="section"
      w="100%"
      maxW="1440px"
      mx="auto"
      my={["30px","120px"]}
    >
      <Flex
        direction="column"
        w="100%"
        justify="center"
        align="center"
        color="heading"
        textAlign="center"
        mb={["10px","80px"]}
      >
        <Divider w={["60px","120px"]} mb={["5","10"]} border={["1px","2px"]} borderColor="heading"  />
        <Heading fontSize={["20","36"]} lineHeight={["30px","54px"]} fontWeight="500">Vamos Nessa?<br />Então escolha seu continente</Heading>
      </Flex>

      <BannerSwiper />
    </Box>
  )
}