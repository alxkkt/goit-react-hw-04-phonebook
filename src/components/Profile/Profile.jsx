import PropTypes from 'prop-types';

import './profile.css'

const Profile = ({
  userName,
  profileTag,
  userLocation,
  imageUrl,
  stats
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={imageUrl}
          alt="User avatar"
          width="150"
          height="150"
          className="avatar"
        />
        <p className="name">{userName}</p>
        <p className="tag">@{profileTag}</p>
        <p className="location">{userLocation}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  profileTag: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired
};
