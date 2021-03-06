import { extendTheme } from '@chakra-ui/react'
import { RiArrowGoBackFill } from 'react-icons/ri'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    background: '#F5F8FA',
    heading: '#47585B',
    highlight: '#ffba08',
    highlight50: 'rgba(255,186,8,0.5)',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'heading'
      }
    }
  }
})