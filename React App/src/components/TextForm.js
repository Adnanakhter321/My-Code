import React, { useState } from 'react';


export default function Pricing(prop) {
  const [text, settext] = useState("");

  let changeUpper = () =>{
    settext(text.toUpperCase());
  }

  let Change = (event) =>{
    settext(event.target.value);
    console.log(event );
  }
  return (
    <>
      <div className="container-xxl">
        <h1 className='mb-4 mt-4'>{prop.heading}</h1>
        <div className="form-group">
          <textarea className="form-control" value={text} placeholder='Enter Something.....' onChange={Change} id="exampleFormControlTextarea1" rows="8"></textarea>
          <button className='btn btn-primary mt-2' onClick={changeUpper}>Convert To UpperCase</button>
        </div>
      </div>
    </>
  )
}