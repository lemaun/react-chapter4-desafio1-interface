import { Icon, Image, Text, VStack } from "@chakra-ui/react";
import { RiZoomOutLine } from "react-icons/ri";

interface CategoryItemProps {
  category: string;
  icon?: string;
}

export function CategoryItem({category, icon=null}: CategoryItemProps) {
  return (
    <VStack>
      <Image src={`./images/icons/${icon}.png`}  alt={icon} mb="4" />
      <Text 
        color="heading"
        fontSize="24"
        fontWeight="semibold"
      >
        {category}
      </Text>
    </VStack>
  )
}