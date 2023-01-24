import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Button, Box } from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <Button variant="outlined" to="/" component={NavLink} color="inherit">
        Home
      </Button>
      {isLoggedIn && (
        <Button
          variant="outlined"
          to="/contacts"
          component={NavLink}
          color="inherit"
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};
