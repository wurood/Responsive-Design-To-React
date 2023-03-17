import React from 'react'
import './style.css'

function index(props) {
  const items = ['HOME','ABOUT ME','RECENT POSTS'];

  return (
    items.map(function(item, i){
        return (
        <>
        { item == "HOME"
          ?
          <li key={i}><a className={props.className} href="#">{item}</a></li>
          :
          <li key={i}><a  href="#">{item}</a></li>
        }
        </>
        )
      })
  )
}

export default index