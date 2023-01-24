import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Box, TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      onSubmit={handleSubmit}
      autoComplete="on"
      component="form"
      sx={{
        margin: '0 auto 0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        gap: '10px',
        flexDirection: 'column',
        maxWidth: '350px',
      }}
    >
      <TextField
        type="text"
        name="name"
        id="username-basic"
        label="Username"
        variant="outlined"
        sx={{
          width: '100%',
        }}
      />
      <TextField
        type="email"
        name="email"
        id="email-basic"
        label="Email"
        variant="outlined"
        sx={{
          width: '100%',
        }}
      />
      <TextField
        type="password"
        name="password"
        id="password-basic"
        label="Password"
        variant="outlined"
        sx={{
          width: '100%',
        }}
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </Box>
  );
};
