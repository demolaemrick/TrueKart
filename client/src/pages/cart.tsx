import dynamic from 'next/dynamic';

import { Grid, Paper, Container } from '@mui/material';

const CartItem = dynamic(() => import('../components/Cart/CartItem'), {
  ssr: false,
});
const Summary = dynamic(() => import('../components/Cart/Summary'), {
  ssr: false,
});

// import CartItem from '../components/Cart/CartItem';
// import Summary from '../components/Cart/Summary';

import { useAppSelector } from '../hooks/store';
import { selectCartItems } from '../store/cart';

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems);
  return (
    <>
      <Container>
        <Grid container mt={4} spacing={2}>
          <Grid item md={8}>
            <Paper>
              {cartItems &&
                cartItems.map((item: any) => (
                  <CartItem key={item._id} item={item} />
                ))}
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper>
              {/* ORDER SUMMARY */}
              <Summary />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
