import Carousel, { CarouselItemComponent as CarouselItem } from './Carousel';

import { BANNER_ITEMS } from '../constants/data';

const Banner = () => {
  return (
    <Carousel>
      {BANNER_ITEMS.map((item, index) => (
        <CarouselItem key={index} width={100}>
          <img
            src={item}
            alt="TrueKart image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Banner;
