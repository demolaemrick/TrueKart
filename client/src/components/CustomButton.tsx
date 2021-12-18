import { ReactNode } from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

interface IButtonProps {
  children?: ReactNode;
  backgroundColor: string;
  icon?: ReactNode;
}

const Button = styled(MuiButton)<IButtonProps>((props) => ({
  backgroundColor: `${props.backgroundColor}`,
  color: '#fff',
  padding: '10px 8px',
  borderRadius: '2px',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 20%)',
  '&:hover': {
    backgroundColor: `${props.backgroundColor}`,
  },
}));
const CustomButton = ({ children, backgroundColor, icon }: IButtonProps) => {
  return (
    <Button backgroundColor={backgroundColor} startIcon={icon}>
      {children}
    </Button>
  );
};

export default CustomButton;
