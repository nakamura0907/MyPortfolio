import React from 'react'
import About from '../../molecules/about'
import Contact from '../../molecules/contact'
import Works from '../../molecules/works'

import Avatar from '../../../images/avatar.png'
import { styled } from './style'

const Index = () => {
  return (
    <div css={styled}>
      <article className="hero">
        <div className="hero-background" style={{ backgroundImage: `url(${Avatar})` }}></div>
        <h1 className="hero-title">ようこそ</h1>
      </article>
      <About />
      <Works />
      <Contact />
    </div>
  )
}

export default Index
