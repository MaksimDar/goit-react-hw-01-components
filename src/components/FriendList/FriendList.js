import FriendListItem from './FriendListItem';
import { List } from './FriendListItem.styled';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </List>
  );
};

export default FriendList;
