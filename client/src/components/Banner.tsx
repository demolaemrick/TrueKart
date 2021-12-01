import Image from 'next/image';

import Carousel, { CarouselItemComponent as CarouselItem } from './Carousel';

import { BANNER_ITEMS } from '../constants/data';

const Banner = () => {
  return (
    <Carousel>
      {BANNER_ITEMS.map((item, index) => (
        <CarouselItem>
          {/* <Image key={index} src={item} width={100} height={100} /> */}
          <img
            key={index}
            src={item}
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Banner;
