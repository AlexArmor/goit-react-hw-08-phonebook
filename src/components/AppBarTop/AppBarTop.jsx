import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Container } from '@mui/material';

export const AppBarTop = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <Container
          maxWidth="sm"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
      </Toolbar>
    </AppBar>
  );
};
