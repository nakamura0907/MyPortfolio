import React from 'react'
import {
  CPGExtensionImage,
  DisappearChat,
  ERPSImage,
  FlutterTodoImage,
  HTTImage,
  MyDImage,
  NWeatherImage,
  TicTacImage,
  TodoImage,
  TownImage
} from '../molecules/WorkItem'

const Works = () => {
  return (
    <section className="works in-page-link" id="works">
      <div className="container">
        <div className="section-title">
          <h2>Works</h2>
          {/* <p>今後開発してみたいアプリについて書く</p> */}
        </div>
        <div className="content">
          <DisappearChat />
          <FlutterTodoImage />
          <NWeatherImage />
          <CPGExtensionImage />
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
