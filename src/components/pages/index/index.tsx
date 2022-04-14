import React from 'react'
import About from '../../molecules/about'
import Contact from '../../molecules/contact'
import Works from '../../molecules/works'
import { styled } from './style'

const Index = () => {
  return (
    <div css={styled}>
      <article className="hero">
        <h1 className="hero-title">ようこそ</h1>
      </article>
      <About />
      <Works />
      <Contact />
    </div>
  )
}

export default Index
