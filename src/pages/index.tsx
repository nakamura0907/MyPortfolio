import * as React from 'react'
import Layout from '@components/template/layout'
import Container from '@src/components/ui/container'
import Section from '@src/components/ui/section'
import About from '@src/components/page/index/about'
import Hero from '@src/components/page/index/hero'

const IndexPage = () => {
  const ref = React.createRef<HTMLElement>()
  const scrollToAbout = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  return (
    <Layout>
      <Hero handleClick={scrollToAbout} />
      <About ref={ref} />
      <Section className="works" id="works">
        <Container className="l-inner">
          <h2>Works</h2>
          <div>gallery</div>
        </Container>
      </Section>
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
    </Layout>
  )
}

export default IndexPage
