import PropTypes from 'prop-types';

import styles from './friendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline })  => {
  return (
    <li className={styles.item}>
      <span className={styles.status}
        style={{
        backgroundColor: isOnline ? 'green' : 'red'
      }}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="70" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendsListItem;

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
