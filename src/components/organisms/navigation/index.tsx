import React from 'react'
import { Link } from 'gatsby'

import './style.css'

const Navigation = () => (
  <ul className="nav">
    <li>
      <Link to="/#top">トップ</Link>
    </li>
    <li>
      <Link to="/#about">自己紹介</Link>
    </li>
    <li>
      <Link to="/#works">作品集</Link>
    </li>
    <li>
      <Link to="/#contact">お問い合わせ</Link>
    </li>
  </ul>
)

export default Navigation
