import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Navigation from '../navigation'

import './style.css'

interface State {
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
            <div className="logo">
              <Link to="/" className="navbar-item">
                <StaticImage height={90} src="../../../images/logo-banner.png" alt="Nakamura0907" />
              </Link>
            </div>
          </div>
          <div className="navbar-right">
            <div className={`drawer-icon-wrap navbar-item ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
              <div className="drawer-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`drawer-menu-wrap ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen(false)}>
        <div className="drawer-menu" onClick={(e) => e.stopPropagation()}>
          <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header
