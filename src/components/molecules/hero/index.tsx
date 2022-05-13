import React from 'react'
import Avatar from '../../../images/avatar.png'

import './style.css'

interface Props {
  handleClick: () => void
}

const Hero: React.FC<Props> = ({ handleClick }) => (
  <article className="hero">
    <div className="hero-background" style={{ backgroundImage: `url(${Avatar})` }}></div>
    <img className="hero-image" src={Avatar} alt="背景" />
    <h1 className="hero-title">ようこそ</h1>
    <div className="hero-arrow" onClick={handleClick}>
      &darr;
    </div>
  </article>
)

export default Hero
