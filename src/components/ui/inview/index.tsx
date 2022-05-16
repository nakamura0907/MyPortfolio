import React from 'react'

import './style.css'

const Observer: React.FC = ({ children }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-15% 0px',
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

interface ProgressProps {
  title: string
  value: number
}

export const Progress: React.FC<ProgressProps> = ({ title, value }) => {
  return (
    <Observer>
      <div className="progress">
        <div className="progress-header">
          <div>{title}</div>
          <span className="progress-value">{value}%</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${value}%` }} />
        </div>
      </div>
    </Observer>
  )
}
