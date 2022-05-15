import classNames from 'classnames'
import React from 'react'

import './style.css'

type Props = React.HTMLAttributes<HTMLElement> & {}

const Section: React.FC<Props> = (props) => {
  const { className, children } = props
  return (
    <section {...props} className={classNames('section', className)}>
      {children}
    </section>
  )
}

export default Section
