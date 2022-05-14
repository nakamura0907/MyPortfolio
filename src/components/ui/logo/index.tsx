import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

type Props = {
  className?: string
}

const Logo: React.FC<Props> = ({ className }) => (
  <div className={classnames('logo', className)}>
    <Link to="/">
      <StaticImage src="../../../images/logo-banner.png" alt="ポートフォリオサイトロゴ" />
    </Link>
  </div>
)

export default Logo
