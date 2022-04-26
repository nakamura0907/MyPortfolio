import { Link } from 'gatsby'
import React from 'react'
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
                NPortfolio
              </Link>
            </div>
          </div>
          <div className="navbar-right">
            <div className="drawer-icon-wrap navbar-item" onClick={() => setIsOpen(true)}>
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
