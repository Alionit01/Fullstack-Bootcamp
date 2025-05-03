import { useState } from 'react';

const AndExample = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? 'Hide Message' : 'Show Message'}
      </button>

      {showMessage && <p>This is a secret message!</p>}
    </div>
  );
};

export default AndExample;
