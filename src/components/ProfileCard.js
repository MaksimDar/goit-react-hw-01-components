import PropTypes from 'prop-types';
import {
  Card,
  CardList,
  CardInfo,
  CardImage,
  CardInfoSpan,
  CardInfoResult,
} from './ProfileCard.styled';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <div>
        <CardImage src={avatar} alt="User avatar" width="240" height="240" />
        <CardInfo>{username}</CardInfo>
        <CardInfo>{tag}</CardInfo>
        <CardInfo>{location}</CardInfo>
      </div>

      <CardList>
        <li>
          <CardInfoSpan>Followers</CardInfoSpan>
          <CardInfoResult>{stats.followers}</CardInfoResult>
        </li>
        <li>
          <CardInfoSpan>Views</CardInfoSpan>
          <CardInfoResult>{stats.views}</CardInfoResult>
        </li>
        <li>
          <CardInfoSpan>Likes</CardInfoSpan>
          <CardInfoResult>{stats.likes}</CardInfoResult>
        </li>
      </CardList>
    </Card>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};
