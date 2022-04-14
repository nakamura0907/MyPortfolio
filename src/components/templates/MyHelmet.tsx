import React from 'react'
import Helmet from 'react-helmet'

const MyHelmet = () => (
  <Helmet
    htmlAttributes={{
      lang: 'ja'
    }}
  >
    <title>Nakamura0907 Portfolio</title>
    <meta name="description" content="Nakamura0907のポートフォリオです。Gatsby.jsで作成しました。" />
  </Helmet>
)

export default MyHelmet
