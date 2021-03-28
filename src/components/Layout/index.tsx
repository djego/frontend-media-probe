import { Box, Text } from "@chakra-ui/layout"

const Layout: React.FC = ({children}) => {
    return (
        <Box width="100vw" minHeight="100vh" backgroundColor="white">
            <Box 
                width="100%" 
                display="flex" 
                alignItems="center" 
                shadow="base" 
                backgroundColor="white" 
                top="0" 
                px="1rem" 
                position="sticky" 
                zIndex="3">
                <Box maxWidth="1024px" margin="0 auto">
                    <Text fontSize="3xl" py="0.8rem" color="gray.700">Media Probe</Text>
                </Box>
            </Box>
            <Box maxWidth="1024px"  margin="0 auto" pt="1rem" px="0.4rem">
                {children}
            </Box>
        </Box>
    )
};

export default Layout;