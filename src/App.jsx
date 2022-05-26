import { useState, useEffect, useRef } from 'react';
import Notiflix from 'notiflix';

import Phonebook from 'components/Phonebook';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { userContacts } from 'components/Phonebook/contacts';
import { nanoid } from 'nanoid';

const App = () => {
  const [state, setState] = useState({
    contacts: [...userContacts],
    // contacts: [],
    filter: '',
  });

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      const data = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(data);
      if (data?.length) {
        setState(prevState => ({
          ...prevState,
          contacts: [...prevState.contacts, ...parsedContacts],
        }));
      }
      firstRender.current = false;
    }
  }, []);
  useEffect(() => {
    if (!firstRender.current) {
      const newItems = JSON.stringify(state.contacts);
      localStorage.setItem('contacts', newItems);
    }
  }, [state.contacts]);
  const addContact = data => {
    const { contacts } = state;

    if (contacts.find(({ name }) => name === data.name)) {
      Notiflix.Report.warning('Oops', 'You already have this contact');
      return;
    }

    setState(prevState => {
      const newContact = { ...data, id: nanoid() };

      return {
        contacts: [...prevState.contacts, newContact],
        filter: '',
      };
    });
  };
  const updateContacts = contactId => {
    setState(prevState => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };
  const filterContact = e => {
    const { name, value } = e.target;

    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const getFilteredContacts = () => {
    const { contacts, filter } = state;

    if (!filter) {
      return contacts;
    }
    const searchedName = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchedName),
    );

    return filteredContacts;
  };
  const contactItems = getFilteredContacts();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Phonebook</h1>
      <Phonebook onSubmit={addContact} />
      <h2
        style={{
          marginBottom: '10px',
        }}
      >
        Contacts
      </h2>
      <Filter filterQuery={filterContact} />
      <ContactList contacts={contactItems} onDelete={updateContacts} />
    </div>
  );
};

export default App;
