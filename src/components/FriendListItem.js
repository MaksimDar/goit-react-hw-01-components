const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <li>
        <img src={avatar} alt={name} />
        <h2>{name}</h2>
        {isOnline ? 'red' : 'blue'};
      </li>
    </div>
  );
};

export default FriendListItem;
