import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import './style.css'

type LogoBannerProps = {
  className?: string
}
export const LogoBanner: React.FC<LogoBannerProps> = ({ className }) => (
  <div className={classnames('logo', className)}>
    <Link to="/">
      <StaticImage src="../../../images/logo-banner.png" alt="ポートフォリオサイトロゴ" />
    </Link>
  </div>
)

export const Avatar = () => (
  <div className="avatar">
    <StaticImage width={200} height={200} src="../../../images/avatar.png" alt="avatar" />
  </div>
)

export const Works = {}
