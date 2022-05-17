import PropTypes from 'prop-types';

import styles from './profile.module.css';

const Profile = ({
  userName,
  profileTag,
  userLocation,
  imageUrl,
  stats
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={imageUrl}
          alt="User avatar"
          width="150"
          height="150"
          className={styles.avatar}
        />
        <p className={styles.name}>{userName}</p>
        <p className={styles.tag}>@{profileTag}</p>
        <p className={styles.location}>{userLocation}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.lable}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.lable}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.lable}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
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
