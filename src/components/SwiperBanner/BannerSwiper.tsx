import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Flex, Heading } from '@chakra-ui/react';


export function BannerSwiper() {
  return (
    <Swiper 
      navigation={true} 
      pagination={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
        <SwiperSlide>
          <Flex
            bgImage="url('./images/slides/1.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            w="100%"
            h="450px"
            align="center"
            color="gray.50"
            justify="center"
            direction={["column"]}
          >
            <Heading fontSize="48px" lineHeight="100px">Europa</Heading>
            <Heading fontSize="24px">O continente mais antigo.</Heading>
          </Flex>
        </SwiperSlide>
        
        <SwiperSlide>
          <Flex
            bgImage="url('./images/slides/1.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            w="100%"
            h="450px"
            align="center"
            color="gray.50"
            justify="center"
            direction={["column"]}
          >
            <Heading fontSize="48px" lineHeight="100px">Europa</Heading>
            <Heading fontSize="24px">O continente mais antigo.</Heading>
          </Flex>
        </SwiperSlide>
        
        
      </Swiper>
  )
}