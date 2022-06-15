import { Box, Flex, Hide, Image, Show, Text } from "@chakra-ui/react";

interface CategoryItemProps {
  category: string;
  icon?: string;
}

export function CategoryItem({category, icon=null}: CategoryItemProps) {
  return (
    <Flex direction={["row","column"]} align="center">
      <Hide below="sm">
        <Image src={`./images/icons/${icon}.png`}  alt={icon} maxW="20" mb="4" />
      </Hide>
      <Show below="sm">
        <Box 
          borderRadius='full'
          boxSize='8px'
          bgColor="highlight"
          float="left"
          mr="3"
        />
      </Show>
      <Text 
        color="heading"
        fontSize={["18","24"]}
        fontWeight={["500","semibold"]}
      >
        {category}
      </Text>
    </Flex>
  )
}