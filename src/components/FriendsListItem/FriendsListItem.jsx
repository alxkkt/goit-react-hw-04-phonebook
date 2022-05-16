import PropTypes from 'prop-types';

import './friendsListItem.css';

const FriendsListItem = ({ avatar, name, isOnline })  => {
  return (
    <li className="item">
      <span className="status">{isOnline ? 'green' : 'red'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

export default FriendsListItem;

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
