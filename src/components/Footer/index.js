import React from 'react'
import './style.css'
import FooterBody from '../Body/index'

function Footer() {
  return (
    <>
     <footer>
            <FooterBody text="Living the Simple Life" className="footer-title" />
            <FooterBody text="Copyright 2023" className="copyright" />
     </footer>
    </>
  )
}

export default Footer