import PropTypes from 'prop-types';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <li class="item">
      <span class="status">{isOnline ? 'green' : 'red'}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
