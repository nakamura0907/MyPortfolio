import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../header'

import './global.css'
import './style.css'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'ja' }}>
        <title>Portfolio | Nakamura0907</title>
        <meta name="description" content="Nakamura0907のポートフォリオサイト" />
      </Helmet>
      <Header />
      <main className="main">{children}</main>
      <footer className="footer">
        <div className="l-inner">
          <small className="copyright">
            &copy; <Link to="/">Nakamura0907</Link> All rights reserved.
          </small>
        </div>
      </footer>
    </>
  )
}

export default Layout
