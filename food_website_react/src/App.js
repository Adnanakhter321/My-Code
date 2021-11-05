import { Provider } from 'react-redux';
import './App.css';
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
