import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
// import { Item } from './ContactList.styled';
// import { BtnDeleteItem } from './ContactList.styled';
import { List, ListItem, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <List
      sx={{
        fontSize: '30px',
        fontFamily: 'roboto',
      }}
    >
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id} sx={{ justifyContent: 'center' }}>
            {name}: {number}
            <IconButton
              type="button"
              size="large"
              onClick={() => dispatch(deleteContacts(id))}
            >
              <DeleteForeverIcon fontSize="inherit" />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};
