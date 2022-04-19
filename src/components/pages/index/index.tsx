import React from 'react'
import About from '../../molecules/about'
import Contact from '../../molecules/contact'
import Works from '../../molecules/works'

import Avatar from '../../../images/avatar.png'
import { styled } from './style'
import Hero from '../../molecules/hero'

const Index = () => {
  return (
    <div css={styled}>
      <Hero>
        <div className="hero-background" style={{ backgroundImage: `url(${Avatar})` }}></div>
        <h1 className="hero-title">ようこそ</h1>
      </Hero>
      <About />
      <Works />
      <Contact />
    </div>
  )
}

export default Index
