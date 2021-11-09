import { Provider } from 'react-redux';
import Routes from './configs/Routes';
import Store from '../src/Store'
function App() {
  return (
      <Provider store={Store}>
        <Routes />
      </Provider>
    );
}

export default App;
