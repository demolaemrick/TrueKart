import Image from 'next/image';
import { Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ICart } from '../../types';

interface CartItemProps {
  item: ICart;
}

const FlexContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  columnGap: '40px',
  padding: '24px',
});

const CartItem = ({ item }: CartItemProps) => {
  return (
    <Box>
      <Typography sx={{ padding: '12px 24px' }}>My Cart (1) </Typography>
      <Divider />
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
          <Typography>
            {item.title.longTitle || item.title.shortTitle}
          </Typography>
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
    </Box>
  );
};

export default CartItem;
