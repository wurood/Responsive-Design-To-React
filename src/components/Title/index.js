import React from 'react'
import './style.css'

function index(props) {
  return (
    <>
    { props.type == "h1" 
      ?
      <h1>{props.text}</h1>
      :
      <h2 className={props.className}>{props.text}</h2>
    }
    </>
  )
}

export default index