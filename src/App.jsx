import { Component } from 'react';

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
    this.setState(({ contacts }) => {
      if (contacts.find(contact => contact.name === newContact.name)) {
        return alert('Ne nado tak');
      } else {
        contacts.push(newContact);

        return {
          contacts: [...contacts],
        };
      }
    });
  };
  filterContact = query => {
    this.setState({ ...query }); // state.filter --> ...query
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
        <Filter onChange={this.filterContact} />
        <ContactList {...this.state} />
      </div>
    );
  }
}

export default App;
