import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import './style.css'

interface State {
  isVisible: boolean
}

const initialState: State = {
  isVisible: false
}

const Fab = () => {
  const [isVisible, setIsVisible] = React.useState(initialState.isVisible)
  React.useEffect(() => {
    window.addEventListener('scroll', scrollFab)

    return () => {
      window.removeEventListener('scroll', scrollFab)
    }
  }, [])

  const scrollFab = (_: Event) => {
    if (window.innerHeight * 1.2 < window.scrollY) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  return (
    <button className={`fab ${isVisible ? 'is-visible' : ''}`} onClick={() => scrollTo('#top')}>
      TOP
    </button>
  )
}

export default Fab
