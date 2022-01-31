import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const NWeatherImage = () => {
  return (
    <div className='content-wrap'>
      <StaticImage src="../../images/now_weather/thumbnail.png" alt='Flutter Weather App.' className='work-wrap' imgClassName='work' objectFit='contain' backgroundColor='#F0F0F0' />
    </div>
  )
}

const HTTImage = () => {
  return (
    <div className='content-wrap'>
      <StaticImage src="../../images/hal_timetable/thumbnail.png" alt='Flutter TimeTable App.' className='work-wrap' imgClassName='work' objectFit='contain' backgroundColor='#F0F0F0' />
    </div>
  )
}

const MyDImage = () => {
  return (
    <div className='content-wrap'>
      <StaticImage src="../../images/my_diary/thumbnail.gif" alt='React + Express Diary App.' className='work-wrap' imgClassName='work' objectFit='contain' backgroundColor='#F0F0F0' />
    </div>
  )
}

const ERPSImage = () => {
  return (
    <div className='content-wrap'>
      <StaticImage src="../../images/easy_rps/thumbnail.gif" alt='React + Express RPS App.' className='work-wrap' imgClassName='work' objectFit='contain' backgroundColor='#F0F0F0' />
    </div>
  )
}

const TodoImage = () => {
  return (
    <div className='content-wrap'>
      <StaticImage src="../../images/todo_next/thumbnail.gif" alt='Next + Express TodoList App.' className='work-wrap' imgClassName='work' objectFit='contain' backgroundColor='#F0F0F0' />
    </div>
  )
}

const TownImage = () => {
  return (
    <div className='content-wrap'>
      <StaticImage src="../../images/town/thumbnail.png" alt='Original WordPress Theme.' className='work-wrap' imgClassName='work' objectFit='contain' backgroundColor='#F0F0F0' />
    </div>
  )
}

const TicTacImage = () => {
  return (
    <div className='content-wrap'>
      <StaticImage src="../../images/tictactoe/thumbnail.gif" alt='React TicTacToe App.' className='work-wrap' imgClassName='work' objectFit='contain' backgroundColor='#F0F0F0' />
    </div>
  )
}

export { NWeatherImage, HTTImage, MyDImage, ERPSImage, TodoImage, TownImage, TicTacImage };
