import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { Item } from './ContactList.styled';
import { BtnDeleteItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            {name}: {phone}
            <BtnDeleteItem
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
            >
              delete
            </BtnDeleteItem>
          </Item>
        );
      })}
    </ul>
  );
};
