import { useContext, useState } from 'react';
import { 
    Text,
    ButtonGroup,
    IconButton,
    Tooltip,
    Center,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { CartContext } from './context/CartContext';

const ItemCount = ({ stock }) => {

  const { cart, incremente, decrement, reset } = useContext(CartContext)

    /* const [count, setCount] = useState(1); */

    /* const onAdd = () => {
        setCount(count -1);
    } */

  return (
    <>
        <ButtonGroup size="sm" isAttached variant="outline">
        {count < 1 ? (
          <Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={decrement} />
        )}
        <Center w="50px" h="30px">
          <Text as="b">{cart}</Text>
        </Center>
        {count < stock ? (
          <IconButton icon={<AddIcon />} onClick={incremente} />
        ) : (
          <Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  )
}

export default ItemCount