import React from "react";
import { Box, Container, Flex, Spacer, Heading } from "@chakra-ui/react";

const Item = () => {
  const productos = [
    {
      id: "1",
      nombre: "Celular",
      description: "Descripción de un celular",
      precio: 120000,
      pictureUrl: "https://www.multipoint.com.ar/Image/0/750_750-SM-A235MZKEARO-6.png"
    },
    {
      id: "2",
      nombre: "Laptop",
      description: "Descripción de una laptop",
      precio: 220000,
      pictureUrl: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-hero.png?context=bWFzdGVyfHJvb3R8MjczNzUyfGltYWdlL3BuZ3xoMGQvaDYxLzE0MTkwNTI5Njc1Mjk0LnBuZ3xmYTMyYzBlZmE5NTcyNzAyMTZhZmJlMmFmOTVjMmZmYTM4ZTdjNWFiZWM0YzE5YWQ2YzcxNmM3OTE2MThjZmE4"
    },
    {
      id: "3",
      nombre: "Lavarropas",
      description: "Descripción de un lavarropas",
      precio: 90000,
      pictureUrl: "https://electroluxar.vtexassets.com/arquivos/ids/156325/elaf8.jpg?v=636754715606270000"
    },
    {
      id: "4",
      nombre: "Heladera",
      description: "Descripción de una heladera",
      precio: 150000,
      pictureUrl: "http://cdn.shopify.com/s/files/1/0629/4506/7251/products/SBS605_1_61613bf9-7569-42fb-960d-6950f8c137af.png?v=1650398254"
    },
    
  ];

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    } else {
      reject("No hay productos");
    }
  });

  mostrarProductos
    .then((resultado) =>
      console.log(
        productos.map((producto) => {
          console.log(resultado);
        })
      )
    )
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <Container maxW="65rem" bg="blue.100" color="#262626" border='2px' borderRadius="5">
        <Flex alignContent="center" gap="2"  >
            {productos.map((item) => {
              return (
                <div key={item.id}>
                  <h1>{item.nombre}</h1>
                  <h2>{item.description}</h2>
                  <h3>{item.precio}</h3>
                  <img src={item.pictureUrl}></img>
                </div>
              );
            })}
        </Flex>
      </Container>
    </>
  );
};

export default Item;
