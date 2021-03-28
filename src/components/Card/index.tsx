import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react"

interface ICard {
    title: string;
    image: string;
    description: string;
    onClick(): void;
};

const Card: React.FC<ICard> = ({
    title,
    image,
    description,
    onClick
}) => {
    return (
        <Box 
            onClick={onClick}
            shadow="base" 
            display="flex" 
            cursor="pointer" 
            transition="all 0.1s ease-in" 
            _hover={{shadow: 'md', backgroundColor: 'gray.50'}}>
            <Image
                boxSize="150px"
                objectFit="cover"
                src={image}
                alt={title}
            />
            <Box px="1.2rem" py="0.2rem" maxHeight="150px">
                <Text fontSize="xl" noOfLines={2} mb="0.4rem">{title}</Text>
                <Text fontSize="sm" noOfLines={3} textAlign='justify' >{description}</Text>
            </Box>
        </Box>
    )
};

export default Card;