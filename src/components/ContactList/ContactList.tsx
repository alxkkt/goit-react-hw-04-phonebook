import React from 'react';

import styles from './ContactList.module.css';

import { TContact } from '../../App';

interface IProps {
  contacts: TContact[];
  onDelete: (param: string) => void;
}

const ContactList = ({ contacts = [], onDelete }: IProps) => {
  const elements = contacts.map(({ name, number, id }) => (
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