import React from 'react'

import './style.css'

const Observer: React.FC = ({ children }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-5% 0px',
      threshold: 0
    }
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('is-inview')
        } else {
          ref.current?.classList.remove('is-inview')
        }
      })
    }, options)
    observer.observe(ref.current!)

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <div className="observer" ref={ref}>
      {children}
    </div>
  )
}

export const FadeUp: React.FC = ({ children }) => {
  return (
    <Observer>
      <div className="fadein fadein-up">{children}</div>
    </Observer>
  )
}
