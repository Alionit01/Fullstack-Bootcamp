import { useState } from 'react';

const ConditionalMessage = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? 'Log Out' : 'Log In'}
      </button>

      {loggedIn ? (
        <p>Welcome, user! 🎉</p>
      ) : (
        <p>Please log in to see your dashboard.</p>
      )}
    </div>
  );
};

export default ConditionalMessage;
