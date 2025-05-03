import { useState } from 'react';

function FunctionExample() {
  const [loggedIn, setLoggedIn] = useState(false);

  // helper function that returns different JSX
  const renderMessage = () => {
    if (loggedIn) {
      return <p>✅ You’re logged in!</p>;
    } else {
      return <p>❌ You’re not logged in.</p>;
    }
  };

  return (
    <div>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? 'Log Out' : 'Log In'}
      </button>

      {/* call the helper function here */}
      {renderMessage()}
    </div>
  );
}

export default FunctionExample;
