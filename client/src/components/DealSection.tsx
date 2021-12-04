import React from 'react';
import { Typography } from '@mui/material';
import Slider, { SliderItem, SliderImageContainer } from './Slider';

import { DEAL_DATA } from '../constants/data';

const DealSection = () => {
  return (
    <Slider title="Deals of the Day">
      {DEAL_DATA.map((item) => (
        <SliderItem py={4}>
          <SliderImageContainer>
            <img src={item.url} alt="TrueKart image" />
          </SliderImageContainer>
          <Typography variant="subtitle1">Tracksuit</Typography>
          <Typography variant="subtitle1">Under $250</Typography>
          <Typography variant="subtitle1">Men's Shoes</Typography>
        </SliderItem>
      ))}
    </Slider>
  );
};

export default DealSection;
