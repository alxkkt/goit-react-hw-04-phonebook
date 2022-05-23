import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = ({ filter, contacts, onDelete }) => {
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
        onClick={() => onDelete(id)}
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
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
  filter: '',
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
