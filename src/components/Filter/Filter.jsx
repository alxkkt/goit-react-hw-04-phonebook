import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ filterQuery }) => {
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

Filter.propTypes = {
  filterQuery: PropTypes.func.isRequired,
};
