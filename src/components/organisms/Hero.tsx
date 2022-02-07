import React from 'react'
import video from '../../hero.mp4'

const Hero = () => {
  return (
    <section className="hero in-page-link" id="top">
      <div>
        <video autoPlay loop muted playsInline style={{ width: '100%' }}>
          <source src={video} />
        </video>
      </div>
    </section>
  )
}

export default Hero
