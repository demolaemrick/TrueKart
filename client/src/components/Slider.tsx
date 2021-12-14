import { FC, Children, ReactElement, cloneElement } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { Paper, Typography, Divider, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Countdown from 'react-countdown';

import { CustomForwardArrow, CustomPrevArrow } from './CustomArrow';

import { AppProps } from '../types';

interface SliderProps extends AppProps {
  title: string;
}
interface RendererArgs {
  hours: number;
  minutes: number;
  seconds: number;
}

export const SliderItem = styled(Box)({
  textAlign: 'center',
});

export const SliderImageContainer = styled(Box)({
  position: 'relative',
  width: '200px',
  height: '180px',
  margin: '0 auto',

  '& .image': {
    height: '100%',
    margin: '0 auto',
    objectFit: 'contain',
  },
});
const Timer = styled(Box)({
  color: '#7f7f7f',
  marginLeft: 10,
  display: 'flex',
  alignItems: 'center',
});

const SliderComponent: FC<SliderProps> = ({ children, title }) => {
  const timerImageURL: string =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const renderer = ({ hours, minutes, seconds }: RendererArgs) => {
    return (
      <span>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };
  const settings = {
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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5">{title}</Typography>
        <Timer>
          <Image src={timerImageURL} width={24} height={24} alt="time clock" />
          <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
        </Timer>
      </Box>

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
