import { Component } from 'react';
import Notiflix from 'notiflix';

import Phonebook from 'components/Phonebook';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { contacts } from 'components/Phonebook/contacts';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [...contacts],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);

      this.setState({ contacts: [...parsedContacts] });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const { contacts } = this.state;

      const newData = JSON.stringify(contacts);
      localStorage.setItem('contacts', newData);
    }
  }
  addContact = data => {
    const { contacts } = this.state;

    if (contacts.find(({ name }) => name === data.name)) {
      Notiflix.Report.warning('Oops', 'You already have this contact');
      return;
    }

    this.setState(({ contacts }) => {
      const newContact = { ...data, id: nanoid() };

      return {
        contacts: [...contacts, newContact],
      };
    });
  };
  updateContacts = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };
  filterContact = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  getFilteredContacts() {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }
    const searchedName = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchedName),
    );

    return filteredContacts;
  }
  render() {
    const userContacts = this.getFilteredContacts();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <Phonebook onSubmit={this.addContact} />
        <h2
          style={{
            marginBottom: '10px',
          }}
        >
          Contacts
        </h2>
        <Filter filterQuery={this.filterContact} />
        <ContactList contacts={userContacts} onDelete={this.updateContacts} />
      </div>
    );
  }
}

export default App;
