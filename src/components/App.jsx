import AppProfile from './App';
import AppStatistics from './AppStatistics';
import FriendList from './FriendList';

const App = () => {
  return (
    <div>
      <AppProfile />
      <AppStatistics />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
