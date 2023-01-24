import { TextField, Typography, Box } from '@mui/material';
import { filterContacts } from 'redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
        }}
      >
        Find contacts by name
      </Typography>
      <TextField
        type="text"
        onChange={e => {
          const action = filterContacts(e.target.value);
          dispatch(action);
        }}
        sx={{
          width: '300px',
        }}
      />
    </Box>
  );
};
