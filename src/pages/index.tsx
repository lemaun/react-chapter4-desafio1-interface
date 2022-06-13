import { Flex } from "@chakra-ui/react";
import { BannerHome } from "../components/BannerHome";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { SwiperBanner } from "../components/SwiperBanner";

export default function Home() {
  return (
    <Flex direction="column" h="100%">
      <Header />
      <BannerHome />
      <Categories />
      <SwiperBanner />
    </Flex>
  )
}
