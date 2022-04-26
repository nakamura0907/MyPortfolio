import React from 'react'
import Avatar from '../../atoms/avatar'
import PR from '../pr'
import Profile from '../profile'
import Skills from '../skills'

import './style.css'

const About: React.ForwardRefExoticComponent<React.RefAttributes<HTMLElement>> = React.forwardRef((_, ref) => (
  <section className="section about" id="about" ref={ref}>
    <div className="l-inner">
      <h2 className="section-title">自己紹介</h2>

      <div className="l-flex-pc">
        <Avatar />
        <Profile />
      </div>

      <PR />
      <Skills />
    </div>
  </section>
))

export default About
