import React from "react";
import './Link.css'
function Link(props) {


    return (
        <>
        {/* {console.log(props.key)}; */}
            <div className='container'>
                <a className='main-a' href={props.link}>
                    <h3 className='h3'>
                       {props.url}
                    </h3>
                    <h1 className='h1'>{props.title}</h1>
                </a>
                <p className='p'>
                   {props.description}
                </p>
            </div>
        </>
    )
}
export default Link;