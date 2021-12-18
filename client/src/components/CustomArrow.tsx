import { Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { styled } from '@mui/material/styles';

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

const Icon = styled(Box)({
  backgroundColor: 'red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '47px',
  height: '127px',
  zIndex: 1,

  '&.slick-prev': {
    left: 0,
    borderBottomRightRadius: '7px',
    borderTopRightRadius: '7px',
  },
  '&.slick-next': {
    right: 0,
    borderBottomLeftRadius: '7px',
    borderTopLeftRadius: '7px',
  },
  '&:hover': {
    backgroundColor: 'red',
  },
  '&::before': {
    display: 'none',
  },
});

export const CustomForwardArrow = ({ className, onClick }: ArrowProps) => {
  return (
    <Icon className={className} onClick={onClick}>
      <ArrowForwardIosIcon sx={{ color: 'white' }} fontSize="large" />
    </Icon>
  );
};

export const CustomPrevArrow = ({ className, onClick }: ArrowProps) => {
  return (
    <Icon className={className} onClick={onClick}>
      <ArrowBackIosNewIcon sx={{ color: 'white' }} fontSize="large" />
    </Icon>
  );
};
