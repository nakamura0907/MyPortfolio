/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Global } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Header from './Header'
import globalStyle from '../styles/global'

interface State {
  navBar: boolean
}

const initialState: State = {
  navBar: false
}

const Layout: React.FC = ({ children }) => {
  const [navBar, setNavBar] = React.useState(initialState.navBar)

  return (
    <>
      <Helmet title="Nakamura0907 Portfolio" />
      <Global styles={globalStyle} />
      <div className={`l-container ${navBar ? 'is-open' : ''}`} id="top">
        <div className="nav-toggle" onClick={() => setNavBar(!navBar)}>
          <FontAwesomeIcon icon={navBar ? faTimes : faBars} />
        </div>
        <Header />
        <main className="main">
          <article className="primary">{children}</article>
          <footer className="footer">
            <div className="footer-bottom">
              <small className="copyright">
                &copy; <Link to="/">Nakamura0907 Portfolio</Link>, All rights reserved.
              </small>
            </div>
          </footer>
        </main>
        {/* <a href="#" className="button-fab">
          TOP
        </a> */}
      </div>
    </>
  )
}

export default Layout
