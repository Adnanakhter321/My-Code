import React, { useState } from 'react';


export default function Pricing(prop) {
  const [text, settext] = useState("");

  
  let changeUpper = () => {
    settext(text.toUpperCase());
  }

  let copytoClipboard = (event) => {
    event.target.innerText = 'Copied..!'
    event.target.disabled = true
    
    /* Select the text field */
    // let textAreaEL = document.getElementById('exampleFormControlTextarea1')
    // textAreaEL.setSelectionRange(0, 99999); /* For mobile devices */
    
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      event.target.innerText = 'Copy'
      event.target.disabled = false
    }, 500)
  } 

  let clearText = ()=>{
    settext("");
  }
  
  let Change = (event) => {
    settext(event.target.value);
  }
  return (
    <>
      <div className="container-xxl">
        <h1 className={`mb-4 mt-4 text-${prop.mode === 'light' ? 'dark' : 'white'}`}>{prop.heading}</h1>
        <div className="form-group">
          <textarea className="form-control" style={{backgroundColor : prop.mode === 'light'? 'white':'#04295f' , color : prop.mode === 'light'? 'black':'white' }} value={text} placeholder='Enter Something.....' onChange={Change} id="exampleFormControlTextarea1" rows="8"></textarea>
          <button className='btn btn-primary my-2' onClick={changeUpper}>Convert To UpperCase</button>
          <button className='btn btn-primary my-2 mx-3' onClick={copytoClipboard}>Copy</button>
          <button className='btn btn-primary my-2 mx-2' onClick={clearText}>Clear</button>
        </div>
      </div>
    </>
  )
}