import * as React from 'react'
import { Global } from '@emotion/react'
import Layout from '../components/Layout'
import Hero from '../components/organisms/Hero'
import About from '../components/organisms/About'
import Qualifications from '../components/organisms/Qualifications'
import Skills from '../components/organisms/Skills'
import Works from '../components/organisms/Works'

import globalStyle from '../styles/indexPage'

const IndexPage = () => (
  <Layout>
    <Global styles={globalStyle} />
    <Hero />
    <About />
    <Qualifications />
    <Skills />
    <Works />
  </Layout>
)

export default IndexPage
