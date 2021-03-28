import { Box, Grid, Text } from "@chakra-ui/layout";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import Card from "../components/Card";
import { Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select } from "@chakra-ui/react";
import useHome from "../hooks/useHome";

const Home = () => {
    const {
        data,
        filters,
        selection,
        isLoading,
        isError,
        isSuccess,
    } = useHome();

    return (
        <Layout>
            <Grid rowGap="0.2rem" columnGap="0.8rem" pb="0.8rem" mb="0.8rem" borderBottomWidth="1px" borderBottomColor="gray.100" 
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(3, 1fr)",
                ]}>
                <Select onChange={filters.changeTypeList} defaultValue={filters.typeList}>
                    <option value="byDate">Por orden</option>
                    <option value="byViews">Más visto</option>
                </Select>
                <Input value={filters.searchText} placeholder="Buscar por artículo o autor" onInput={filters.changeSearchText} />
                <Select onChange={filters.changePeriod} defaultValue={filters.today ? "1" : "7"}>
                    <option value="7">Últimos 7 días</option>
                    <option value="1">Último día</option>
                </Select>
            </Grid>
            {
                isLoading &&
                <Box mt="4.8rem">
                    <Loader />
                </Box>
            }
            {
                isError &&
                <Box backgroundColor="red.500" color="white" mt="2.4rem" py="1.2rem" textAlign="center" width="100%">
                    Error al cargar los datos favor de actualizar
                </Box>
            }
            {
                isSuccess &&
                <Grid gap="1.2rem" pb="1.2rem"
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                ]}>
                    {
                        data?.map((item: any, index: number) => {
                            return (
                                <Card
                                    onClick={selection.onClickCard(item)}
                                    description={item.abstract} 
                                    title={item.title}
                                    image={item.image}
                                    key={`index_${index}`} />
                            )
                        })
                    }
                </Grid>
            }
            <Modal motionPreset="slideInBottom" onClose={selection.clear} isOpen={!!selection.item} size='xl'>
                <ModalOverlay />
                <ModalContent pb={5} >
                    <ModalHeader textAlign='center' mx="1.6rem">{selection.item?.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display="flex" flexDirection="row">
                            <Image
                                boxSize="250px"
                                objectFit="cover"
                                src={selection.item?.image}
                                alt={selection.item?.title}
                            />
                            <Box display="flex" flexDirection="column">
                                <Text fontSize="sm"textAlign='justify' px="1.6rem">{selection.item?.abstract}</Text>
                                
                                <Box mt="auto" display="flex" flexDirection="column">
                                    <Text fontSize="xs"textAlign='right' px="1.6rem" width="100%" as="i">Feha de publicación: {selection.item?.publishedDate}</Text>
                                    <Text fontSize="xs"textAlign='right' px="1.6rem" width="100%" as="i">{selection.item?.author}</Text>
                                </Box>
                            </Box>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Layout>
    )
};

export default Home;