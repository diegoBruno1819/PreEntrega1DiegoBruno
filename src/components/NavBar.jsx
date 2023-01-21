import CartWidget from "./CartWidget";
import { Box, Container, Flex, Spacer, Heading } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="blue.100" color="#262626">
        <Flex alignContent="center" gap="2">
          <Box p="2" color="black">
            <Heading size="md" fontSize="30px">E-Commerce</Heading>
          </Box>
          <Spacer />
          <Box p="2" color="white">
            <a className="borde_a" href="#">Inicio</a>
            <a className="borde_a" href="#">Productos</a>
            <a className="borde_a" href="#">Sucursales</a>
            <a className="borde_a" href="#">Contacto</a>
            <CartWidget />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
