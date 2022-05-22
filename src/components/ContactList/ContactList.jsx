import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

class ContactList extends Component {
  static defaultProps = {
    contacts: [],
    filter: '',
  };
  deleteContact = contactId => {
    this.props.onDelete(contactId);
  };
  render() {
    const { filter, contacts } = this.props;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );

    const finalContacts = filter === '' ? contacts : filteredContacts;

    const elements = finalContacts.map(({ name, number, id }) => (
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
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
