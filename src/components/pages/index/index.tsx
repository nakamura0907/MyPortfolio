import React from 'react'

import About from '../../molecules/about'
import Contact from '../../molecules/contact'
import Hero from '../../molecules/hero'
import Works from '../../molecules/works'

import { styled } from './style'

const Index = () => {
  const ref = React.createRef<HTMLElement>()

  const handleClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div css={styled} id="top">
      <Hero handleClick={handleClick} />
      <About ref={ref} />
      <Works />
      <Contact />
    </div>
  )
}

export default Index
