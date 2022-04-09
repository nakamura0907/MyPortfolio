import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const DisappearChat = () => {
  return (
    <a
      href="https://nakamura0907.github.io/disappear-chat/public/index.html"
      target="_blank"
      style={{ display: 'block' }}
      className="work-wrap"
    >
      <StaticImage
        src="../../images/disappear-chat/thumbnail.png"
        alt="消えるチャットアプリ."
        imgClassName="work"
        layout="fullWidth"
        objectFit="contain"
      />
    </a>
  )
}

const FlutterTodoImage = () => {
  return (
    <a href="https://github.com/nakamura0907/todolist-flutter" target="_blank" style={{ display: 'block' }} className="work-wrap">
      <StaticImage
        src="../../images/flutter_todo/thumbnail.png"
        alt="React TicTacToe App."
        imgClassName="work"
        layout="fullWidth"
        objectFit="contain"
      />
    </a>
  )
}

const NWeatherImage = () => {
  return (
    <a href="https://github.com/nakamura0907/now-weather" target="_blank" style={{ display: 'block' }} className="work-wrap">
      <StaticImage
        src="../../images/now_weather/thumbnail.png"
        alt="React TicTacToe App."
        imgClassName="work"
        layout="fullWidth"
        objectFit="contain"
      />
    </a>
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
    <a href="https://github.com/nakamura0907/MyDiary" target="_blank" style={{ display: 'block' }} className="work-wrap">
      <StaticImage
        src="../../images/my_diary/thumbnail.png"
        alt="React TicTacToe App."
        imgClassName="work"
        layout="fullWidth"
        objectFit="contain"
      />
    </a>
  )
}

const ERPSImage = () => {
  return (
    <a
      href="https://github.com/nakamura0907/kuso_app/tree/develop/easyRPS"
      target="_blank"
      style={{ display: 'block' }}
      className="work-wrap"
    >
      <StaticImage
        src="../../images/easy_rps/thumbnail.png"
        alt="React TicTacToe App."
        imgClassName="work"
        layout="fullWidth"
        objectFit="contain"
      />
    </a>
  )
}

const TodoImage = () => {
  return (
    <a href="https://github.com/nakamura0907/TodoList_Next" target="_blank" style={{ display: 'block' }} className="work-wrap">
      <StaticImage
        src="../../images/todo_next/thumbnail.png"
        alt="React TicTacToe App."
        imgClassName="work"
        layout="fullWidth"
        objectFit="contain"
      />
    </a>
  )
}

const TownImage = () => {
  return (
    <a href="https://nakamura0907.wp.xdomain.jp/" target="_blank" style={{ display: 'block' }} className="work-wrap">
      <StaticImage
        src="../../images/town/thumbnail.png"
        alt="React TicTacToe App."
        imgClassName="work"
        layout="fullWidth"
        objectFit="contain"
      />
    </a>
  )
}

const TicTacImage = () => {
  return (
    <a href="https://github.com/nakamura0907/Tic-Tac-Toe_React.js" target="_blank" style={{ display: 'block' }} className="work-wrap">
      <StaticImage
        src="../../images/tictactoe/thumbnail.png"
        alt="React TicTacToe App."
        imgClassName="work"
        layout="fullWidth"
        objectFit="contain"
      />
    </a>
  )
}

export {
  DisappearChat,
  FlutterTodoImage,
  NWeatherImage,
  CPGExtensionImage,
  HTTImage,
  MyDImage,
  ERPSImage,
  TodoImage,
  TownImage,
  TicTacImage
}
