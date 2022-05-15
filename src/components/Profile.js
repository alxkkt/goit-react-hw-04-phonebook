import PropTypes from 'prop-types';

export default function Profile({
  userName,
  profileTag,
  userLocation,
  imageUrl,
  followers,
  views,
  likes,
}) {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={imageUrl}
          alt="User avatar"
          width="150"
          height="150"
          class="avatar"
        />
        <p class="name">{userName}</p>
        <p class="tag">@{profileTag}</p>
        <p class="location">{userLocation}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  profileTag: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
