import * as React from 'react'

import Layout from '@components/template/layout'
import Hero from '@src/components/page/index/hero'
import About from '@src/components/page/index/about'
import Works from '@src/components/page/index/works'
import Contact from '@src/components/page/index/contact'

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
      <Works />
      <Contact />
    </Layout>
  )
}

export default IndexPage
