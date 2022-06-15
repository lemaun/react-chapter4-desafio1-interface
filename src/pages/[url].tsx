
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { BannerContinent } from "../components/Continents/BannerContinent";
import { About } from "../components/Continents/About";
import { CidadesItem } from "../components/Continents/CidadesItem";

import { useRouter } from 'next/router';

interface Continent {
  
  name: string,
  url: string,
  slide: {
    banner: string,
    desc: string,
  },
  bannerHeader: string,
  about: string,
  indexes: {
    countries: number,
    laguages: number,
    cities: number,
  },
  cities100: 
  {
    name: string,
    country: string,
    img: string,
    flag: string,
  }[]
  
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps): JSX.Element {
  const router = useRouter();
  if (router.isFallback) {
    return <span>Carregando...</span>;
  }
  return (
    <Flex direction="column" h="100%">
      <Header />
      <BannerContinent banner={continent.bannerHeader} name={continent.name} />
      <About sobre={continent.about} indices={continent.indexes} />
      <Box
        as="section"
        w="100%"
        maxW="1440px"
        mx="auto"
        my={["0","20"]}
        px={[5,0]}
      >
                 
        <Heading fontSize={["24","36"]} lineHeight="54px" fontWeight="500">Cidades +100</Heading>
        
        <SimpleGrid
          columns={[1,2,3,4]}
          spacing={["5","20"]}
          mt={["5","10"]}
          px={[10,0]}
          pb={[5,0]}
        >
          {continent.cities100.map(city => (
            <CidadesItem key={city.name} nome={city.name} pais={city.country} img={city.img} bandeira={city.flag} />  
          ))}
          
        </SimpleGrid>
      </Box>
    </Flex>
  )
}

export const getStaticPaths = async () => {
  const continents = await fetch('http://localhost:3000/api/getContinents')
  const data = await continents.json()
  
  return {
    paths: data.map(continent => ({
      params: { url: continent.data.url },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { url } = params
  const response = await fetch('http://localhost:3000/api/getContinent', {
    method: 'POST',
    body: url,
  })
  const continent = await response.json()
  
  return {
    props: { continent },
    redirect: 60 * 1 //1 minuto
  }
};