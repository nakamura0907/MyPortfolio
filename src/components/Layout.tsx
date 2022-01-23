/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Global } from '@emotion/core'
import Header from './Header'
import globalStyle from '../styles/global'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={globalStyle} />
      <div className="l-container">
        <i className="nav-toggle-mobile" />
        <Header />
        <main className="main">{children}</main>
        <footer className="footer">footer</footer>
        <a href="#" className="button-fab">
          TOP
        </a>
      </div>
    </>
  )
}

export default Layout
