import PropTypes from 'prop-types';
import { Component } from 'react';

import styles from './Filter.module.css';

class Filter extends Component {
  state = {
    filter: '',
  };
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });

    this.props.onChange(this.state);
  };
  render() {
    const { filter } = this.state;

    return (
      <div>
        <label htmlFor="" className={styles.label}>
          Find contact by name
        </label>
        <input
          type="text"
          name="filter"
          value={filter}
          className={styles.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
