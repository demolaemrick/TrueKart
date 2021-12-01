import { Box, AppBar, Toolbar, Typography, Button, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ px: 10 }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            TrueKart
          </Typography>
          <Button color="inherit" sx={{ mr: 2 }}>
            Login
          </Button>
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
