// import logo from './logo.svg';
import React from 'react';

import './App.css';
import Greetings from './components/greetings';

// function App() {
//   return (
//    <h1 className='Heading'>hello</h1>
//   );
// }


function Greeting() {
  return (
    <div>
      <Greetings userName="Adnan" Country="Pakistan" />
      <Greetings userName = 'Bilal' Country= 'Pak' />
      {/* <Greetings userName="Ali" rollNumber="2644" />
      <Greetings userName="Akram" rollNumber="2233" />
      <Greetings userName="Umar" rollNumber="5555" />
      <Greetings userName="Sarim" rollNumber="9113" /> */}
    </div>
  )
}
// export default App;
export default Greeting;
