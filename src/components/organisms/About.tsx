import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>セクションに関しての説明</p>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="l-flex l-flex-justify-center">
              <StaticImage
                src='../../images/avatar.png'
                alt='avatar'
                width={300}
                className='avatar'
                />
              </div>
          </div>
          <div className="col-lg-7 content">
            <h3>Nakamura0907</h3>
            <p>自分に対しての簡単な紹介文</p>
            <ul>
              <li>
                <span className="font-bold">生年月日:</span>
                <span>1999年09月07日</span>
              </li>
              <li>
                <span className="font-bold">年齢:</span>
                <span>22歳</span>
              </li>
              <li>
                <span className="font-bold">出身地:</span>
                <span>愛知県</span>
              </li>
              <li>
                <span className="font-bold">メールアドレス:</span>
                <span>準備中です</span>
              </li>
            </ul>
            <p>自己PRをここに</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
