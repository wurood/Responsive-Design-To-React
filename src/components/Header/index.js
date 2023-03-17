import React from 'react'
import './style.css'
import HeaderLeft from './HeaderLeft/index'
import HeaderRight from './HeaderRight/index'

function Header() {
  return (
    <>
    <div className="container container-flex">
        <HeaderLeft />
        <HeaderRight />
    </div>
    </>
  )
}

export default Header