import { FC, useEffect, useState, Children, cloneElement } from 'react';
import { useSwipeable } from 'react-swipeable';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Carousel = styled(Box)({
  overflow: 'hidden',
});

type CarouselInnerProps = {
  transform: string;
};
const CarouselInner = styled(Box)<CarouselInnerProps>((props) => ({
  whiteSpace: 'nowrap',
  transition: 'transform .3s',
  transform: props.transform,
}));

const CarouselItem = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '280px',
  backgroundColor: 'green',
  color: 'white',
});

const Indicators = styled(Box)((props) => ({
  display: 'flex',
  justifyContent: 'center',
  '& > button': {
    margin: '5px',
  },
  '& > button.active': {
    backgroundColor: 'green',
    color: 'white',
  },
}));

export const CarouselItemComponent: FC<{ width?: string }> = ({
  children,
  width,
}) => {
  return <CarouselItem style={{ width: width }}>{children}</CarouselItem>;
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
        {Children.map(children, (child: any, index) => {
          return cloneElement(child, { width: '100%' });
        })}
      </CarouselInner>
      <Indicators>
        <button onClick={() => updateIndex(activeIndex - 1)}>Prev</button>
        <button onClick={() => updateIndex(activeIndex + 1)}>Next</button>
      </Indicators>
    </Carousel>
  );
};

export default CustomCarousel;
