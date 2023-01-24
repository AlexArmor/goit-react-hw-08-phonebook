import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Button, Box, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <Typography variant="h6" component="p">
        Welcome, {user.name}
      </Typography>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        variant="outlined"
        to="/register"
        color="inherit"
      >
        Logout
      </Button>
    </Box>
  );
};
