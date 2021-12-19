import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ICart } from '../../types';

interface CartItemProps {
  item: ICart;
}

const FlexContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
});

const CartItem = ({ item }: CartItemProps) => {
  return (
    <FlexContainer>
      <Box>
        {/* Image of 110 height and width */}
        <Image
          src={item.imageUrl}
          width={110}
          height={110}
          alt={`${item.title.longTitle || item.title.shortTitle}`}
        />
        {/* Increment and Decrement group buttons */}
      </Box>
      <Box>
        {/* Big or small title */}
        <Typography>{item.title.longTitle || item.title.shortTitle}</Typography>
        {/* Seller */}
        <Typography>
          Seller:RetailNet
          {/* some image */}
        </Typography>
        {/* Price */}
        <Box>
          <Typography>{item.price.cost}</Typography>
          <Typography>{item.price.mrp}</Typography>
          <Typography>{item.price.discount}</Typography>
        </Box>
        {/* REMOVE button */}
      </Box>
      {/* Divider */}
    </FlexContainer>
  );
};

export default CartItem;
