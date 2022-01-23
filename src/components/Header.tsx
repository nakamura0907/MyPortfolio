import { Link } from 'gatsby'
import React from 'react'
import styles from '../styles/header'

const Header = () => {
  return (
    <header className="header" css={styles}>
      <div>
        <div>
          <Link to="/">Nakamura0907 Portfolio</Link>
        </div>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
