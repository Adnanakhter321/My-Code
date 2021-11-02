import React from 'react'
import { Provider } from 'react-redux'
import Redux from './screens/Redux'
import Store from './Store'

const App = () => {
  return (
      <Provider store={Store}>
         <Redux />
      </Provider>
    )
}

export default App
