import ContextApi from './components/contextApi';
import StateContext from './context/stateContext';

function App() {
  return (
    <StateContext>
      <ContextApi />
    </StateContext>
  );
}

export default App;
