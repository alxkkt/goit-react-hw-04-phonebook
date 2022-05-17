import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendsList from './components/FriendsList';
import TransactionHistory from './components/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload Stats" stats={data} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
