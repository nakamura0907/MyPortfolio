import { Link } from 'gatsby'
import React from 'react'
import { styled } from './style'

const Footer = () => {
  return (
    <footer className="footer" css={styled}>
      <div className="l-inner">
        <small className="copyright">
          &copy; <Link to="/">Nakamura0907</Link> All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
