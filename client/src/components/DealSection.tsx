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
          <Typography variant="subtitle1">{item.title.shortTitle}</Typography>
          <Typography variant="subtitle1">{item.discount}</Typography>
          <Typography variant="subtitle1">{item.tagline}</Typography>
        </SliderItem>
      ))}
    </Slider>
  );
};

export default DealSection;
