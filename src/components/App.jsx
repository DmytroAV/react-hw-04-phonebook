import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { Message } from './Message/Message';
import FormContacts from './FormContacts/FormContacts';
import { Contacts } from './Contacts/Contacts';
import { GlobalStyle } from './GlobalStyle';
import items from './json/contacts.json';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

const notifyOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const LS_KEY = 'phonebook_contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts_LS = JSON.parse(localStorage.getItem(LS_KEY));

    if (contacts_LS) {
      setContacts(contacts_LS);
    }
    if (!contacts_LS || contacts_LS.length === 0) {
      localStorage.setItem(LS_KEY, JSON.stringify(items));
      setContacts(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const createContact = ({ firstName, lastName, email, mobilePhone }) => {
    const normalName = firstName.toLowerCase();
    const checkName = contacts.some(
      ({ firstName }) => firstName.toLowerCase() === normalName
    );
    if (checkName) {
      toast.error(`${firstName} is already in your phonebook`, notifyOptions);
      return;
    }

    const newContact = {
      id: nanoid(),
      firstName,
      lastName,
      email,
      mobilePhone,
    };

    setContacts(contacts => [...contacts, newContact]);
  };

  const handleFilterChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const addFilterContacts = () => {
    const normalFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(({ firstName }) =>
        firstName.toLowerCase().includes(normalFilter)
      );
    }
    return;
  };

  const deleteContact = contactId => {
    setContacts(contacts => contacts.filter(item => item.id !== contactId));
  };

  const filteredContacts = addFilterContacts();

  return (
    <>
      <StyleSheetManager
        shouldForwardProp={isPropValid}
        disableVendorPrefixes={false}
      >
        <GlobalStyle />
        <div className="container">
          <FormContacts onSubmit={createContact} />
          {contacts ? (
            <Contacts
              items={filteredContacts}
              onChange={handleFilterChange}
              onDelete={deleteContact}
              value={filter}
            />
          ) : (
            <Message message="There are no contacts in your phonebook. Please add your first contact!" />
          )}
          <ToastContainer />
        </div>
      </StyleSheetManager>
    </>
  );
}

export default App;
