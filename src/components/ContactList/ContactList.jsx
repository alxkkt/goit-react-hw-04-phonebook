import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

class ContactList extends Component {
  static defaultProps = {
    contacts: [],
    filter: '',
  };
  state = {
    contacts: [...this.props.contacts],
  };
  deleteContact = idx => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== idx),
      };
    });
  };
  render() {
    const { contacts } = this.state;
    const { filter } = this.props;

    const contactsCopy = contacts.map(contact => ({ ...contact }));
    const filteredContacts = contactsCopy.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );

    const elements = filteredContacts.map(({ name, number, id }) => (
      <li key={id} className={styles.contactsListItem}>
        <p>
          {name}: {number}
        </p>
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={() => this.deleteContact(id)}
        >
          Delete
        </button>
      </li>
    ));
    return (
      <section className={styles.contacts}>
        <ol className={styles.contactsList}>{elements}</ol>
      </section>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  filter: PropTypes.string,
};
