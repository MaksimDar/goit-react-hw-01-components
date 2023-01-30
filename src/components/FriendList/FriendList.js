import FriendListItem from './FriendListItem';
import { List } from './FriendListItem.styled';

const FriendList = ({ friends }) => {
  return (
    <div>
      <List>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem
              isOnline={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}
            />
          </li>
        ))}
      </List>
    </div>
  );
};
export default FriendList;
