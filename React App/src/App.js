import './App.css';

import Navbar from './components/Navbar'
import Pricing from './components/TextForm'
import Class from './components/Class'

export default function Greeting() {
  return (
    <>
      <Navbar title='GeTServices' hd='Contact Us' />
      {/* <Navbar title='GeTServices'/> */}


      {/* passing components  */}
      <Pricing heading='Enter The Text To Analyze' />
      {/* passing components  */}

      <Class />

    </>
  )
}
