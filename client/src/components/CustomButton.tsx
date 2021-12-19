import { ReactNode } from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

interface IButtonProps {
  children?: ReactNode;
  backgroundcolor: string;
  icon?: ReactNode;
  click?: () => void;
}

const Button = styled(MuiButton)<IButtonProps>((props) => ({
  backgroundColor: `${props.backgroundcolor}`,
  color: '#fff',
  padding: '10px 8px',
  borderRadius: '2px',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 20%)',
  '&:hover': {
    backgroundColor: `${props.backgroundcolor}`,
  },
}));
const CustomButton = ({
  children,
  backgroundcolor,
  icon,
  click,
}: IButtonProps) => {
  return (
    <Button
      backgroundcolor={backgroundcolor}
      startIcon={icon}
      onClick={click}
      disableRipple
    >
      {children}
    </Button>
  );
};

export default CustomButton;
