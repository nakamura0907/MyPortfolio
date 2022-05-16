import React from 'react'

import About from '../../molecules/about'
import Contact from '../../molecules/contact'
import Hero from '../../molecules/hero'
import Works from '../../molecules/works'

import './style.css'

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
    <div>
      <Hero handleClick={handleClick} />
      <div className="hero-bottom">
        <About ref={ref} />
        <Works />
        <Contact />
      </div>
    </div>
  )
}

export default Index
