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
  addContact = data => {
    this.setState({
      ...data,
    });
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
        <Filter />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
