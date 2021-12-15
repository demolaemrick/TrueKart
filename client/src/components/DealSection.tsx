import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '@mui/material';
import Slider, { SliderItem, SliderImageContainer } from './Slider';

import { Product } from '../types';

const DealSection: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <Slider title="Deals of the Day">
      {products.map((item: Product) => (
        <Link href={`/products/${item._id}`} key={item._id}>
          <SliderItem py={4}>
            <SliderImageContainer>
              <Image
                src={item.imageUrl}
                alt="TrueKart image"
                layout="fill"
                className={'image'}
              />
            </SliderImageContainer>
            <Typography variant="subtitle1">{item.title.shortTitle}</Typography>
            <Typography variant="subtitle1">{item.discount}</Typography>
            <Typography variant="subtitle1">{item.tagline}</Typography>
          </SliderItem>
        </Link>
      ))}
    </Slider>
  );
};

export default DealSection;
