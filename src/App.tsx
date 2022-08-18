import React, { useState, useEffect, useRef } from 'react';
import Notiflix from 'notiflix';


import Phonebook from './components/Phonebook';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import initialContacts from './components/Phonebook/contacts.json';
import { nanoid } from 'nanoid';

export type TContact = {
  id: string;
  name: string;
  number: string;
}

interface IState {
  contacts: TContact[];
  filter: string;
}

interface IContactData {
  name: string;
  number: string;
}

const App = () => {
  const [state, setState] = useState<IState>({
    contacts: [...initialContacts],
    filter: '',
  });

  const firstRender = useRef<boolean>(true);

  useEffect(() => {
    if (firstRender.current) {
      const data = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(data!);
      if (data?.length) {
        setState(prevState => ({
          ...prevState,
          contacts: [...parsedContacts],
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

  const addContact = (data: IContactData) => {
    const { contacts } = state;

    if (contacts.find(({ name }) => name === data.name)) {
      Notiflix.Report.warning('Oops', 'You already have this contact', 'Ok');
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
  const updateContacts = (contactId: string) => {
    setState(prevState => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };
  const filterContact = (e: React.ChangeEvent<HTMLInputElement>) => {
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
