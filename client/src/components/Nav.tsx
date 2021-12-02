import Image from 'next/image';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NAVITEMS } from '../constants/data';

const Flex = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const Nav = () => {
  return (
    <Paper component={Flex} square={true} px={4} py={2} mb={1}>
      {NAVITEMS.map((item, index) => (
        <Box key={index} sx={{ textAlign: 'center' }}>
          <Image
            src={`${item.url}`}
            alt="Picture of the author"
            width={60}
            height={60}
          />
          <Typography variant="subtitle1">{item.text}</Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default Nav;
