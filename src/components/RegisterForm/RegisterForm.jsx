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
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        gap: '10px',
      }}
    >
      <TextField
        type="text"
        name="name"
        id="username-basic"
        label="Username"
        variant="outlined"
      />
      <TextField
        type="email"
        name="email"
        id="email-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        type="password"
        name="password"
        id="password-basic"
        label="Password"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </Box>
  );
};
