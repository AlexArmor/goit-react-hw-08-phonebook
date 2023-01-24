import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <Button
        variant="outlined"
        to="/register"
        component={NavLink}
        color="inherit"
      >
        Register
      </Button>
      <Button
        variant="outlined"
        to="/login"
        component={NavLink}
        color="inherit"
      >
        Log In
      </Button>
    </Box>
  );
};
