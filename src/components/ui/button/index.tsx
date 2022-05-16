import React from 'react'
import classNames from 'classnames'

import './style.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'default' | 'large'
  children: React.ReactNode
}
const Button: React.FC<Props> = (props) => {
  const { size, className, children } = props
  return (
    <button
      {...props}
      className={classNames('button', className, {
        'button-large': size === 'large'
      })}
    >
      {children}
    </button>
  )
}
Button.defaultProps = {
  size: 'default'
}

export default Button
