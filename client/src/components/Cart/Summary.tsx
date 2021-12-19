import { Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const Flex = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '20px 0',
});

const Summary = () => {
  return (
    <Box>
      <Typography
        sx={{ padding: '13px 24px', fontWeight: '500', color: '#878787' }}
        variant="body1"
      >
        PRICE DETAILS
      </Typography>
      <Divider />
      <Box sx={{ padding: '13px 24px' }}>
        <Flex>
          <Typography>Price (1 item)</Typography>
          <Typography>3,108</Typography>
        </Flex>
        <Flex>
          <Typography>Delivery Charges</Typography>
          <Typography>Free</Typography>
        </Flex>
        <Divider />
        <Flex sx={{ fontSize: '18px', fontWeight: 500, color: '#212121' }}>
          <Typography variant="inherit">Total Amount</Typography>
          <Typography variant="inherit">3,108</Typography>
        </Flex>
      </Box>
    </Box>
  );
};

export default Summary;
