import { Flex } from "@chakra-ui/react";
import { BannerHome } from "../components/BannerHome";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <BannerHome />
    </Flex>
  )
}
