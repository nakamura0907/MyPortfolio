import React from 'react'
import classNames from 'classnames'

import './style.css'

type Props = {
  size?: 'small' | 'medium'
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ size, children }) => {
  return (
    <div
      className={classNames('l-container', {
        'l-container-small': size === 'small',
        'l-container-medium': size === 'medium'
      })}
    >
      {children}
    </div>
  )
}
Container.defaultProps = {
  size: 'medium'
}

export default Container
