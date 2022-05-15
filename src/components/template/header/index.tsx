import React from 'react'
import { Link } from 'gatsby'

import { LogoBanner } from '@components/ui/images'
import Hamburger from '@src/components/ui/hamburger'

import './style.css'

type State = {
  isOpen: boolean
}

const initialState: State = {
  isOpen: false
}

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(initialState.isOpen)

  return (
    <header className="header">
      <div className="l-inner">
        <div className="navbar">
          <div className="navbar-left">
            <LogoBanner className="navbar-item" />
          </div>
          <div className="navbar-right">
            <Hamburger className="navbar-item" isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>

      <Hamburger.Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <ul className="navbar-list-hamburger">
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#works">Works</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </Hamburger.Menu>
    </header>
  )
}

export default Header
