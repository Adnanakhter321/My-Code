import {rootReducers} from './Reducers/Index'
import { createStore } from 'redux'
const Store = createStore(rootReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default Store;