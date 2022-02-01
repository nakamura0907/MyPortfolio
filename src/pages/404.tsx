/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { Global, jsx } from '@emotion/react'
import Layout from '../components/Layout'
import Styled from "../styles/NotFoundPage";

const NotFoundPage = () => (
  <Layout>
    <Global styles={Styled} />
    <h1>404 Not Found.</h1>
    <p>ページが見つかりませんでした。<Link to="/">トップページ</Link>に戻ってください</p>
  </Layout>
)

export default NotFoundPage
