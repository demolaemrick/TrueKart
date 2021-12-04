import { FC, Children, ReactElement, cloneElement } from 'react';
import Slider from 'react-slick';
import { Paper, Typography, Divider, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CustomForwardArrow, CustomPrevArrow } from './CustomArrow';

import { AppProps } from '../types';

export const SliderItem = styled(Box)({
  textAlign: 'center',
});

export const SliderImageContainer = styled(Box)({
  width: '200px',
  height: '180px',
  margin: '0 auto',

  '& img': {
    height: '100%',
    margin: '0 auto',
  },
});

interface SliderProps extends AppProps {
  title: string;
}
const SliderComponent: FC<SliderProps> = ({ children, title }) => {
  const settings = {
    className: 'container',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    nextArrow: <CustomForwardArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <Paper elevation={4}>
      <Typography variant="h5">{title}</Typography>
      <Divider />
      <Slider {...settings}>
        {Children.map(children, (child) => {
          return cloneElement(child as ReactElement<any>);
        })}
      </Slider>
    </Paper>
  );
};

export default SliderComponent;
