import React from 'react'
import './style.css'
import Items from '../NavigationItems/index'

function index() {
  return (
    <>
    <ul>
        <Items className="current-page" />
    </ul>
    </>
  )
}

export default index