import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Phonebook.module.css';

const Phonebook = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(state);

    setState({
      name: '',
      number: '',
    });
  };
  const handleChange = e => {
    const { name, value } = e.target;

    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { name, number } = state;
  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="">Number</label>
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={styles.formBtn}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
