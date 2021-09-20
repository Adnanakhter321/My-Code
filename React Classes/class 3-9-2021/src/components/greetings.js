import React from 'react';

// let h1 = React.createElement('h1' , null , 'Hello React');
// ReactDOM.render(h1 , document.getElementById('root'));


// function Greeting() {
//   let h1 = React.createElement('h1', null, 'Hello React');
//   let p = React.createElement('p', null, 'Hello React');

//   return React.createElement('div', null , h1, p)
// }

 function Greeting() {
    return <div>
      <h1>
        Hello react
      </h1>
      <p>
        Welcome to this react app
      </p>
      <h3>
        Created By Adnan
      </h3>
    </div>
  }
export default Greeting;