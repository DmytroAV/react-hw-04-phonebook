import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
import {
  Container,
  Title,
  ContactsUl,
  InputFilterContacts,
  ListContact,
  Contact,
  NameContact,
  EmailContact,
  PhoneContact,
  ButtonDelete,
} from './Contacts.styled';

export const Contacts = ({ items, value, onChange, onDelete }) => {
  return (
    <Container>
      <Title>Contacts</Title>
      <ContactsUl>
        <InputFilterContacts
          placeholder="Find contacts by First Name"
          name="filter"
          value={value}
          onChange={onChange}
        />
        {items.length === 0 ? (
          <Message message="There is no such name in your phonebook. Please enter correct contacts name!" />
        ) : (
          items.map(({ id, firstName, lastName, email, mobilePhone }) => (
            <ListContact key={id}>
              <Contact>
                <NameContact>
                  {firstName} {lastName}
                </NameContact>
                <EmailContact>{email}</EmailContact>
                <PhoneContact>{mobilePhone}</PhoneContact>
              </Contact>
              <ButtonDelete type="button" onClick={() => onDelete(id)}>
                Delete
              </ButtonDelete>
            </ListContact>
          ))
        )}
      </ContactsUl>
    </Container>
  );
};

Contacts.propTypes = {
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      mobilePhone: PropTypes.string.isRequired,
    })
  ).isRequired,
};
