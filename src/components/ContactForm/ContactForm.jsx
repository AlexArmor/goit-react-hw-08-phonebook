import { addContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { Button, Box, TextField, Typography } from '@mui/material';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const isAtList = contacts.find(contact => contact.name === name);
    if (isAtList) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      name,
      number,
    };
    dispatch(addContacts(contact));
    event.target.reset();
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
      <Typography variant="h5">Name</Typography>
      <TextField
        type="text"
        name="name"
        variant="filled"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        sx={{
          width: '100%',
        }}
      />
      <Typography variant="h5">Number</Typography>
      <TextField
        type="tel"
        name="number"
        variant="filled"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        sx={{
          width: '100%',
        }}
      />
      <Button type="submit" variant="contained">
        Add contacts
      </Button>
    </Box>
  );
};
