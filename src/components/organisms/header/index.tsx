import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header className="header">
      <div className="header-bar">
        <div className="header-logo">
          <Link to="/">Portfolio</Link>
        </div>

        <nav className="header-navigation">
          <ul>
            <li></li>
          </ul>
        </nav>

        <div className="hamburger header-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="header-navigation-pc"></div>
    </header>
  )
}

export default Header
