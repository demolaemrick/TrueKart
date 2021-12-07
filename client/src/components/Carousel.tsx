import {
  FC,
  ReactElement,
  useEffect,
  useState,
  Children,
  cloneElement,
} from 'react';
import { useSwipeable } from 'react-swipeable';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

type CarouselInnerProps = {
  transform: string;
};
type CarouselItemProps = {
  width: number;
};

const Carousel = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
});

const CarouselInner = styled(Box)<CarouselInnerProps>((props) => ({
  whiteSpace: 'nowrap',
  transition: 'transform .3s',
  transform: props.transform,
}));

const CarouselItem = styled(Box)<CarouselItemProps>((props) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: `${props.width}%`,
  height: '280px',
}));

const Arrrows = styled(Box)((props) => ({
  position: 'absolute',
  top: 'calc(50% - 70px)',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const Icon = styled(Box)({
  backgroundColor: '#fff',
  padding: '50px 10px 50px 15px',
  '&:nth-of-type(2)': {
    padding: '50px 15px 50px 10px',
  },
});

export const CarouselItemComponent: FC<CarouselItemProps> = ({
  children,
  width,
}) => {
  return <CarouselItem width={width}>{children}</CarouselItem>;
};

const CustomCarousel: FC = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = Children.count(children) - 1;
    } else if (newIndex >= Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const transformValue = `translateX(-${activeIndex * 100}%)`;

  return (
    <Carousel
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <CarouselInner transform={transformValue}>
        {Children.map(children, (child) => {
          return cloneElement(child as ReactElement<any>);
        })}
      </CarouselInner>
      <Arrrows>
        <Icon onClick={() => updateIndex(activeIndex - 1)}>
          <ArrowBackIosNewIcon fontSize="large" />
        </Icon>
        <Icon onClick={() => updateIndex(activeIndex + 1)}>
          <ArrowForwardIosIcon fontSize="large" />
        </Icon>
      </Arrrows>
    </Carousel>
  );
};

export default CustomCarousel;
