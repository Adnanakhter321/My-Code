import React from 'react';

// let h1 = React.createElement('h1' , null , 'Hello React');
// ReactDOM.render(h1 , document.getElementById('root'));


// function Greeting() {
//   let h1 = React.createElement('h1', null, 'Hello React');
//   let p = React.createElement('p', null, 'Hello React');

//   return React.createElement('div', null , h1, p)
// }

function Greeting({ userName, Country }) {
  return (
     <>
     <h1>My Name is {userName}</h1>
     <h2>My country IS {Country}</h2>
     </>

  );
}

export default Greeting;
