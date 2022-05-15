import * as React from 'react'
import Layout from '@components/template/layout'
import Container from '@src/components/ui/container'
import Section from '@src/components/ui/section'
import About from '@src/components/page/index/about'

const IndexPage = () => (
  <Layout>
    <section>
      <h1>
        <span className="text-secondary">I'm a</span>
        <br />
        programmer
      </h1>
      <button>About</button>
    </section>
    <About />
    <Section id="works">
      <Container className="l-inner">
        <h2>Works</h2>
        <div>gallery</div>
      </Container>
    </Section>
    <Section id="contact" style={{ marginBottom: 'var(--size-5)' }}>
      <Container className="l-inner">
        <h2>Contact</h2>
        <a href="#">お問い合わせはこちらから</a>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
