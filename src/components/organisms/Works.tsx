import { StaticImage } from 'gatsby-plugin-image'
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
            <StaticImage src="../../images/now_weather/thumbnail.png" alt='React TicTacToe App.' className='work-wrap' imgClassName='work' layout='fullWidth'  objectFit='contain' />
            <StaticImage src="../../images/hal_timetable/thumbnail.png" alt='React TicTacToe App.' className='work-wrap' imgClassName='work' layout='fullWidth'  objectFit='contain' />
            <StaticImage src="../../images/my_diary/thumbnail.png" alt='React TicTacToe App.' className='work-wrap' imgClassName='work' layout='fullWidth'  objectFit='contain' />
            <StaticImage src="../../images/todo_next/thumbnail.png" alt='React TicTacToe App.' className='work-wrap' imgClassName='work' layout='fullWidth'  objectFit='contain' />
            <StaticImage src="../../images/easy_rps/thumbnail.png" alt='React TicTacToe App.' className='work-wrap' imgClassName='work' layout='fullWidth'  objectFit='contain' />
            <StaticImage src="../../images/town/thumbnail.png" alt='React TicTacToe App.' className='work-wrap' imgClassName='work' layout='fullWidth'  objectFit='contain' />
            <StaticImage src="../../images/tictactoe/thumbnail.png" alt='React TicTacToe App.' className='work-wrap' imgClassName='work' layout='fullWidth'  objectFit='contain' />
        </div>
      </div>
    </section>
  )
}

export default Works
