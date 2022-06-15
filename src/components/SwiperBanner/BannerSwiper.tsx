import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { api } from '../../services/api';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Flex, Heading, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';


export function BannerSwiper() {

  const [data, setData] = useState([])
  async function getData() {
    const res = await fetch('/api/getContinents')
    const newData = await res.json()
    setData(newData)
  }
  useEffect(() => {
    getData()
  },[])

  return (
    <Swiper 
      navigation={true} 
      pagination={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {data.length > 0 && (
        data.map((d) => (
          <SwiperSlide key={d.data.url}>
            <Link key={d.data.url} href={d.data.url}>
              <Flex
                bgImage={d.data.slide.banner}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                w="100%"
                h={["250px","450px"]}
                align="center"
                color="gray.50"
                justify="center"
                direction={["column"]}
              >
                <Heading fontSize={["24px","48px"]} lineHeight={["50px","100px"]}>{d.data.name}</Heading>
                <Heading fontSize={["14px","24px"]}> {d.data.slide.desc} </Heading>
              </Flex>
            </Link>
          </SwiperSlide>
        ))
      )}
         
    </Swiper>
  )
}