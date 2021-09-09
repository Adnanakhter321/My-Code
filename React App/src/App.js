import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import Class from './components/Class'

export default function Greeting() {
  const [mode, setmode] = useState("light");
  let theme = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#153463'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  
  let yellowdark = ()=>{
    if(mode === 'light'){
      document.body.style.backgroundColor = '#98920d'
      setmode('yellow')
    }
    else{
      document.body.style.backgroundColor = 'white'
      setmode('light')
    }
  }

  return (
    <>
      <Navbar title='GeTServices' hd='Contact Us' yellowdark={yellowdark} theme={theme} mode={mode} />
      {/* <Navbar title='GeTServices'/> */}


      {/* passing components  */}
      <TextForm heading='Enter The Text To Analyze'  mode={mode}/>
      {/* passing components  */}

      {/* <Class /> */}

    </>
  )
}
