import PropTypes from 'prop-types';
import {
  FriendItem,
  GreenCircle,
  RedCircle,
  StatusCircule,
  FriendName,
} from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <FriendItem>
        <StatusCircule>
          {isOnline === true ? <GreenCircle /> : <RedCircle />}
        </StatusCircule>
        <img src={avatar} alt={name} width="48" height="48" />
        <FriendName>{name}</FriendName>
      </FriendItem>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendListItem;
