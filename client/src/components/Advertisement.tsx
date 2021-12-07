import { Grid } from '@mui/material';

const IMAGES = [
  'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
  'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
  'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50',
];

const imageStyle = {
  width: '100%',
};

const Advertisement = () => {
  const AdImageUrl =
    'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
      <Grid container spacing={2} mt={2}>
        {IMAGES.map((image, index) => (
          <Grid key={index} md={4} item>
            <img src={image} style={imageStyle} />
          </Grid>
        ))}
      </Grid>
      <img src={AdImageUrl} style={imageStyle} />
    </>
  );
};

export default Advertisement;
