import React from 'react'
import Avatar from '../../atoms/avatar'
import PR from '../pr'
import Profile from '../profile'
import Skills from '../skills'

import './style.css'

const About = () => {
  return (
    <section className="section about">
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
  )
}

export default About
