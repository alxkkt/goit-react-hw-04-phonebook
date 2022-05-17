import FriendsListItem from '../FriendsListItem';
import PropTypes from 'prop-types';

import styles from './friendsList.module.css'

const FriendsList = ({ friends }) => {
  const elements = friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))
  return (
    <ul className={styles.friendsList}>
     {elements}
    </ul>
  );
}

export default FriendsList;

FriendsList.defaultProps = {
  friends: [],
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
