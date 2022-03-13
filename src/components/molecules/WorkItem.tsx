import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const FlutterTodoImage = () => {
  return (
    <StaticImage
      src="../../images/flutter_todo/thumbnail.png"
      alt="React TicTacToe App."
      className="work-wrap"
      imgClassName="work"
      layout="fullWidth"
      objectFit="contain"
    />
  )
}

const NWeatherImage = () => {
  return (
    <StaticImage
      src="../../images/now_weather/thumbnail.png"
      alt="React TicTacToe App."
      className="work-wrap"
      imgClassName="work"
      layout="fullWidth"
      objectFit="contain"
    />
  )
}

const CPGExtensionImage = () => {
  return (
    <a
      href="https://chrome.google.com/webstore/detail/color-property-getter/habnllbmpgfdedfjecifgipdaacfahcn?hl=ja&authuser=0"
      target="_blank"
      style={{ display: 'block' }}
      className="work-wrap"
    >
      <StaticImage
        src="../../images/cpg_extension/thumbnail.png"
        alt="Color Property Getter. Chorme Extension"
        imgClassName="work"
        layout="fullWidth"
        objectFit="contain"
      />
    </a>
  )
}

const HTTImage = () => {
  return (
    <StaticImage
      src="../../images/hal_timetable/thumbnail.png"
      alt="React TicTacToe App."
      className="work-wrap"
      imgClassName="work"
      layout="fullWidth"
      objectFit="contain"
    />
  )
}

const MyDImage = () => {
  return (
    <StaticImage
      src="../../images/my_diary/thumbnail.png"
      alt="React TicTacToe App."
      className="work-wrap"
      imgClassName="work"
      layout="fullWidth"
      objectFit="contain"
    />
  )
}

const ERPSImage = () => {
  return (
    <StaticImage
      src="../../images/easy_rps/thumbnail.png"
      alt="React TicTacToe App."
      className="work-wrap"
      imgClassName="work"
      layout="fullWidth"
      objectFit="contain"
    />
  )
}

const TodoImage = () => {
  return (
    <StaticImage
      src="../../images/todo_next/thumbnail.png"
      alt="React TicTacToe App."
      className="work-wrap"
      imgClassName="work"
      layout="fullWidth"
      objectFit="contain"
    />
  )
}

const TownImage = () => {
  return (
    <StaticImage
      src="../../images/town/thumbnail.png"
      alt="React TicTacToe App."
      className="work-wrap"
      imgClassName="work"
      layout="fullWidth"
      objectFit="contain"
    />
  )
}

const TicTacImage = () => {
  return (
    <StaticImage
      src="../../images/tictactoe/thumbnail.png"
      alt="React TicTacToe App."
      className="work-wrap"
      imgClassName="work"
      layout="fullWidth"
      objectFit="contain"
    />
  )
}

export { FlutterTodoImage, NWeatherImage, CPGExtensionImage, HTTImage, MyDImage, ERPSImage, TodoImage, TownImage, TicTacImage }
