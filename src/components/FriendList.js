import FriendListItem from './FriendListItem';

const FriendList = friends => {
  return (
    <div>
      <ul>
        {friends.map(friend => (
          <li>
            <FriendListItem
              isOnline={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FriendList;
