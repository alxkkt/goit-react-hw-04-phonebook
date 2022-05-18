import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Notification.module.css';

class Notification extends Component {
  render() {
    return <p>No</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
