import { Container, Typography } from '@mui/material';
export default function Home() {
  return (
    <Container>
      <Typography
        variant="h3"
        component="h1"
        sx={{ textAlign: 'center', paddingTop: '60px' }}
      >
        Phonebook welcome page{' '}
      </Typography>
    </Container>
  );
}
