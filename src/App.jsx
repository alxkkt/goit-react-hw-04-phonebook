import Feedback from 'components/Feedback';

export const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',

        blockSize: '100vh',
      }}
    >
      <Feedback />
    </div>
  );
};
