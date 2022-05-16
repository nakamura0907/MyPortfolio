import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Avatar: React.FC = () => (
  <div className="avatar w-3-pc">
    <StaticImage width={200} height={200} src="../../../images/avatar.png" alt="avatar" />
  </div>
)

export default Avatar
