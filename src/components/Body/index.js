import React from 'react'
import './style.css'

function index(props) {
  return (
         <p className={props.className}>{props.text}</p>
  )
}

export default index