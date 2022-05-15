import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

import Profile from "./Profile";
import Statistics from './Statistics';
import FriendsList from './FriendsList';
import TransactionHistory from './TransactionHistory'

// import Friends from "./Friends";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile 
      imageUrl={user.avatar}
      userName={user.username}
      profileTag={user.tag}
      userLocation={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics
      title="Upload stats"
      stats={data} />
      <FriendsList 
      friends={friends}/>
      <TransactionHistory
      transactions={transactions}
      />
    </div>
  );
};
