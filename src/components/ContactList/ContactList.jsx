import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

class ContactList extends Component {
  state = {};
  render() {
    const { contacts } = this.props;

    const elements = contacts.map(({ name, number, id }) => (
      <li key={id} className={styles.contactsListItem}>
        {name}: {number}
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

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};
