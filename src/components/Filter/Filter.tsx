import React from 'react';

import styles from './Filter.module.css';

interface IProps {
  filterQuery: (param: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ filterQuery }: IProps) => {
  return (
    <div>
      <label htmlFor="" className={styles.label}>
        Find contact by name
      </label>
      <input
        type="text"
        name="filter"
        className={styles.input}
        onChange={filterQuery}
      />
    </div>
  );
};

export default Filter;