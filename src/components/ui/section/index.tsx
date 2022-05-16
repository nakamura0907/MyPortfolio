import classNames from 'classnames'
import React from 'react'

import './style.css'

type Props = React.HTMLAttributes<HTMLElement> & {}

const Section = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const { className, children } = props
  return (
    <section ref={ref} {...props} className={classNames('section', className)}>
      {children}
    </section>
  )
})

export default Section
