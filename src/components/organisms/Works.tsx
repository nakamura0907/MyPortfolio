import React from 'react'
import { ERPSImage, HTTImage, MyDImage, NWeatherImage, TicTacImage, TodoImage, TownImage } from '../molecules/WorkItem'

const Works = () => {
  return (
    <section className="works" id="works">
      <div className="container">
        <div className="section-title">
          <h2>Works</h2>
          <p>今後開発してみたいアプリについて書く</p>
        </div>
        <div className='content'>
          <NWeatherImage />
          <HTTImage />
          <MyDImage />
          <TodoImage />
          <ERPSImage />
          <TownImage />
          <TicTacImage />
        </div>
      </div>
    </section>
  )
}

export default Works
