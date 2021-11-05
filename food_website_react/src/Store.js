import { createStore } from "redux";

import Index from '../src/Reducers/Index'

const Store = createStore(Index ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default Store;