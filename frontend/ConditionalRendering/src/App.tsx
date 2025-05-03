import AndExample from "./assets/components/conditionalRedering/AndExample";
import ConditionalMessage from "./assets/components/conditionalRedering/ConditionalMessage";
import FunctionExample from "./assets/components/conditionalRedering/FuntionExample";
import TernaryExample from "./assets/components/conditionalRedering/TernaryExample";

function App() {
  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h1>App Component</h1>
      <ConditionalMessage />

      <hr style={{ margin: '2rem 0' }} />

      <TernaryExample />

      <hr style={{ margin: '2rem 0' }} />

      <AndExample />

      <hr style={{ margin: '2rem 0' }} />

      <FunctionExample />
    </div>
  );
}

export default App;
