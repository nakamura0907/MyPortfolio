import Container from '@src/components/ui/container'
import { Avatar } from '@src/components/ui/images'
import Section from '@src/components/ui/section'
import React from 'react'
import PR from './pr'
import Profile from './profile'
import Skills from './skills'

import './style.css'

const About = () => {
  return (
    <Section className="about" id="about">
      <Container className="l-inner">
        <h2>About</h2>
        <div className="about-info">
          <Avatar />
          <Profile />
        </div>
        <PR />
        <Skills />
      </Container>
    </Section>
  )
}

export default About
