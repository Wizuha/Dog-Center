import React, { useState } from 'react'
import './Header.css'

function Header() {
  const[view,SetView] = useState(false)

  const onClickHeader = () => {
    SetView(!view)
  }
  return (
    <div className="header-content">
      <a href="/">
        <img src="/Logo.svg" />
      </a>
      <div className="menu">
        <a href="/">Home</a>
        <a href="/Gallery">Gallery</a>
        <a href="/Search">Search</a>
      </div>
      <div className="menu-mobile" onClick={onClickHeader}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      {
        view ?(
           <div className="dropdown">
              <a href="/">Home</a>
              <a href="/Gallery">Gallery</a>
              <a href="/Search">Search</a>
        </div>
        ):<></>
      }
    </div>
  );
}

export default Header
