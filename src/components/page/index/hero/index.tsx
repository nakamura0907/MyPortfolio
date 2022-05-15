import React from 'react'

import Button from '@src/components/ui/button'

import Image from '@src/images/avatar.png'
import './style.css'

type Props = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const Hero: React.FC<Props> = ({ handleClick }) => {
  return (
    <section className="hero">
      <div className="hero-background-wrap">
        <div className="hero-background" style={{ backgroundImage: `url(${Image})` }}></div>
      </div>
      <div className="hero-contents">
        <h1 className="hero-text">
          <span className="text-secondary">I'm a</span>
          <br />
          programmer
        </h1>
        <Button size="large" onClick={handleClick}>
          About <span className="transform-right-hover">&rarr;</span>
        </Button>
      </div>
    </section>
  )
}

export default Hero
