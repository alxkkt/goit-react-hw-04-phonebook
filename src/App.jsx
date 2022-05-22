import { Component } from 'react';
import Notiflix from 'notiflix';

import Phonebook from 'components/Phonebook';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { contacts } from 'components/Phonebook/contacts';

class App extends Component {
  state = {
    contacts: [...contacts],
    filter: '',
  };
  addContact = newContact => {
    const { contacts } = this.state;

    if (contacts.find(contact => contact.name === newContact.name)) {
      Notiflix.Report.warning('Oops', 'You already have this contact');
      return;
    }

    this.setState(prevState => {
      prevState.contacts.push(newContact);
      return {
        contacts: [...prevState.contacts],
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
  render() {
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
        <ContactList {...this.state} onDelete={this.updateContacts} />
      </div>
    );
  }
}

export default App;
