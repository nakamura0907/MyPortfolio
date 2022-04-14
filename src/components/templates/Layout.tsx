import React from 'react'
import { Global } from '@emotion/react'

import Footer from '../organisms/footer'
import Header from '../organisms/header'
import MyHelmet from './MyHelmet'
import { style } from './global'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={style} />
      <MyHelmet />
      <div className="l-site" id="top">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
