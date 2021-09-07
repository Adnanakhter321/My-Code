import './App.css';

import Navbar from './components/Navbar'
import Pricing from './components/Pricing'

export default function Greeting() {
  return (
    <>
      <Navbar title='GeTServices' hd='Contact Us' />
      {/* <Navbar title='GeTServices'/> */}


      {/* passing components  */}
      <Pricing />
      {/* passing components  */}


    </>
  )
}

// export function Price(){
//   return (
//     <>
//     <Pricing/>
//     </>
//   )
// }
