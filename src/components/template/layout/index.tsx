import React from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../header'

import './global.css'
import './style.css'

if (typeof window !== `undefined`) {
  smoothscroll.polyfill()
}

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'ja' }}>
        <title>Portfolio | Nakamura0907</title>
        <meta name="description" content="Nakamura0907のポートフォリオサイト" />
      </Helmet>
      <div id="top">
        <Header />
        <main className="main">{children}</main>
        <footer className="footer">
          <div className="l-inner">
            <small className="copyright">
              &copy; <Link to="/">Nakamura0907</Link> All rights reserved.
            </small>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
