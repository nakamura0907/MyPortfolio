import React from 'react'
import Scroll from 'react-anchor-link-smooth-scroll'
import { Link } from 'gatsby'
import styles from '../styles/header'

const Header = () => {
  return (
    <header className="header" css={styles}>
      <div className="profile">
        <div className="site-title">
          <Link to="/">Nakamura0907 Portfolio</Link>
        </div>
        <div>{/* アバターがあれば丸画像で配置 */}</div>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <Scroll href="#top">TOP</Scroll>
          </li>
          {/* TODO: ↓ DOMを取得し、ページごとに切り替える */}
          <li className="header-nav-item">
            <Scroll href="#about">ABOUT</Scroll>
          </li>
          <li className="header-nav-item">
            <Scroll href="#qualifications">QUALIFICATIONS</Scroll>
          </li>
          <li className="header-nav-item">
            <Scroll href="#skills">SKILLS</Scroll>
          </li>
          <li className="header-nav-item">
            <Scroll href="#works">WORKS</Scroll>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
