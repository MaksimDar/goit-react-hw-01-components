import user from '../user.json';
import Profile from './ProfileCard/ProfileCard';
import data from '../data.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import transactions from '../transactions.json';
import TransactionHistory from './Transactions/TransactionHistory';

const App = () => {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
