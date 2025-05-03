import { useState } from 'react';

const TernaryExample = () => {
  
    const [role, setRole] = useState('guest');
    return (
    
        <div>
          <button onClick={() => setRole(role === 'guest' ? 'admin' : 'guest')}>
            Switch Role
          </button>
    
          <p>{role === 'admin' ? 'Hello Admin!' : 'Hello Guest!'}</p>
        </div>
      );
    }

export default TernaryExample;
