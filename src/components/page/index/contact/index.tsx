import React from 'react'

import Container from '@src/components/ui/container'
import Section from '@src/components/ui/section'

const Contact = () => (
  <Section className="contact" id="contact" style={{ marginBottom: 'var(--size-5)' }}>
    <Container className="l-inner">
      <h2>Contact</h2>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScPzjGuk75uCD4gOja3s_aq9KU5Af41WPOzAjJq8YUoJClV3Q/viewform?usp=sf_link"
        target="_blank"
      >
        お問い合わせはこちらから
      </a>
    </Container>
  </Section>
)

export default Contact
