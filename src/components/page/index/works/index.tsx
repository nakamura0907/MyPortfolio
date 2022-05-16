import React from 'react'

import Container from '@src/components/ui/container'
import Section from '@src/components/ui/section'
import { Works as WorkImages } from '@components/ui/image'

import './style.css'

const Works = () => {
  return (
    <Section className="works" id="works">
      <Container className="l-inner">
        <h2>Works</h2>
        <div className="gallery-wrap">
          {WorkImages.map((Element, index) => (
            <Element key={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Works
