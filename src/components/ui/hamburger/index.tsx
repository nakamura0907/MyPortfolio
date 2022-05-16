import classNames from 'classnames'
import React from 'react'

import './style.css'

type HamburgerProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpen?: boolean
  className?: string
}

const Hamburger: React.FC<HamburgerProps> = (props) => {
  const { isOpen, className, ...rest } = props
  return (
    <div
      {...rest}
      className={classNames('hamburger', className, {
        'is-open': isOpen
      })}
    >
      <div className="hamburger-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

type HamburgerMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpen?: boolean
  className?: string
  children: React.ReactNode
}
const HamburgerMenu: React.FC<HamburgerMenuProps> = (props) => {
  const { isOpen, className, children, ...rest } = props
  return (
    <div
      {...rest}
      className={classNames('hamburger-menu-wrap', className, {
        'is-open': isOpen
      })}
    >
      <div className="hamburger-menu" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Object.assign(Hamburger, {
  Menu: HamburgerMenu
})
