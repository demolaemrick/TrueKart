import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Image from 'next/image';
import Router from 'next/router';

import { Grid, Box, Typography, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { styled } from '@mui/material/styles';

import Button from '../../components/CustomButton';

import { useAppDispatch } from '../../hooks/store';
import { addItemToCart as addToCart } from '../../store/cart';

import { OFFERS, FASSURED } from '../../constants/data';
import { Product } from '../../types';

const ImageContainer = styled(Box)({
  position: 'relative',
  width: '300px',
  height: '370px',
  margin: '0 auto',
  '& .image': {
    height: '100%',
    objectFit: 'contain',
  },
});

const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',

  '& button': {
    width: '48%',
  },
});

const HeadingText = styled(Typography)({
  color: '#212121',
  fontSize: '18px',
  fontWeight: 400,
});

const SubHeadingText = styled(Typography)({
  color: '#878787',
  fontSize: '14px',
  fontWeight: 500,
});

const Row = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '20px',
  columnGap: '20px',

  '& > p:first-of-type': {
    color: '#878787',
    fontWeight: 500,
  },
  '& p': {
    fontSize: '14px',
  },
});

const ProductDetail = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispatch = useAppDispatch();
  const adURL =
    'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const addItemToCart = (item: Product) => {
    const newItem = { ...item, cartQuantity: 1 };
    dispatch(addToCart(newItem));
    Router.push('/cart');
  };
  return (
    <Container>
      <Grid container mt={4} spacing={4}>
        {/* IMAGE SIDE */}
        <Grid item md={4}>
          <Box sx={{ border: '1px solid #f0f0f0' }} py={2}>
            <ImageContainer>
              <Image className={'image'} src={product.imageUrl} layout="fill" />
            </ImageContainer>
          </Box>
          <ButtonContainer>
            <Button
              backgroundcolor="#fb641b"
              icon={<ShoppingCartIcon />}
              click={() => addItemToCart(product)}
            >
              Go to Cart
            </Button>
            <Button backgroundcolor="green" icon={<FlashOnIcon />}>
              Buy Now
            </Button>
          </ButtonContainer>
        </Grid>
        {/* DESCRIPTION SIDE */}
        <Grid item md={8}>
          <Box>
            <HeadingText>{product.title.longTitle}</HeadingText>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <SubHeadingText> 8 Ratings & 1 Reviews</SubHeadingText>
              <img src={FASSURED} style={{ width: 77, marginLeft: 20 }} />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '28%',
              }}
            >
              <Typography sx={{ fontSize: '28px', fontWeight: 500 }}>
                &#8358;{product.price.cost}
              </Typography>
              <Typography
                sx={{
                  color: '#878787',
                  textDecoration: 'line-through',
                  fontSize: '14px',
                }}
              >
                &#8358;{product.price.mrp}
              </Typography>
              <Typography sx={{ color: '#388e3c', fontSize: '14px' }}>
                {product.price.discount} off
              </Typography>
            </Box>

            <Box mt={2}>
              <Typography sx={{ fontWeight: 500 }}>Available offers</Typography>
              {OFFERS.map((offer, index) => (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  key={index}
                >
                  <LocalOfferIcon sx={{ color: '#26a541' }} />
                  <Typography ml={2} sx={{ fontSize: '13px', lineHeight: 2.5 }}>
                    <span style={{ fontWeight: 500 }}>Bank Offer </span>
                    {offer}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box>
              <Row>
                <Typography variant="body1">Delivery</Typography>
                <Typography variant="body1">
                  Delivery by {date.toDateString()} | $40
                </Typography>
              </Row>
              <Row>
                <Typography variant="body1">Warranty</Typography>
                <Typography variant="body1">No Warranty</Typography>
              </Row>
              <Row>
                <Typography variant="body1">Seller</Typography>
                <Box>
                  <Typography variant="body1" sx={{ color: '#2874f0' }}>
                    SuperComNet
                  </Typography>
                  <Typography>GST invoice available</Typography>
                  <Typography>View more sellers starting from $329</Typography>
                </Box>
              </Row>
              <Row>
                <img src={adURL} style={{ width: 390 }} />
              </Row>
              <Row>
                <Typography variant="body1">Description</Typography>
                <Typography paragraph>{product.description}</Typography>
              </Row>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:8080/products/${params!.id}`);
  const product: Product = await res.json();
  return {
    props: {
      product,
    },
  };
};

export default ProductDetail;
