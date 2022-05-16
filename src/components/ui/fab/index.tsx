import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import classNames from 'classnames'

import './style.css'

type State = {
  isVisible: boolean
}

const initialState: State = {
  isVisible: false
}

const Fab = () => {
  const [isVisible, setIsVisible] = React.useState(initialState.isVisible)
  React.useEffect(() => {
    window.addEventListener('scroll', toggleFab)

    return () => {
      window.removeEventListener('scroll', toggleFab)
    }
  }, [])

  const toggleFab = (_: Event) => {
    if (window.innerHeight * 1 < window.scrollY) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  return (
    <button
      className={classNames('fab', {
        'is-visible': isVisible
      })}
      onClick={() => scrollTo('#top')}
    >
      TOP
    </button>
  )
}

export default Fab
