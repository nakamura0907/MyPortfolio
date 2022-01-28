import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Works = () => {
  return (
    <section className="works" id="works">
      <div className="container">
        <div className="section-title">
          <h2>Works</h2>
          <p>今後開発してみたいアプリについて書く</p>
        </div>
        <div className="content">
          {/* TODO: スマホ画面時、レイアウトが崩れる。md以上で適用にする?? */}
          <div className='content-wrap'>
            <StaticImage src="../../images/hal_timetable/thumbnail.gif" alt='test' className='work-wrap' imgClassName='work' objectFit='contain' backgroundColor='#F0F0F0' />
          </div>
          <div className='content-wrap'>
            <StaticImage src="../../images/my_diary/thumbnail.gif" alt='test' className='work-wrap' imgClassName='work' objectFit='contain' backgroundColor='#F0F0F0' />
          </div>
          <div className='content-wrap'>
            <StaticImage src="../../images/hal_timetable/thumbnail.gif" alt='test' className='work-wrap'  imgClassName='work' objectFit='contain' backgroundColor='#F0F0F0' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
