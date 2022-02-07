import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
  return (
    <section className="about in-page-link" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="l-flex l-flex-justify-center">
              <StaticImage src="../../images/avatar.png" alt="avatar" width={300} className="avatar" />
            </div>
          </div>
          <div className="col-lg-7 content">
            <h3>Nakamura0907</h3>
            <p>コーディングだけではなく要求定義から受け入れテストまで、幅広い作業のできるエンジニアを目指しています。</p>
            <ul>
              <li>
                <span className="font-bold mr-2">生年月日:</span>
                <span>1999年09月07日</span>
              </li>
              <li>
                <span className="font-bold mr-2">年齢:</span>
                <span>22歳</span>
              </li>
              <li>
                <span className="font-bold mr-2">出身地:</span>
                <span>愛知県</span>
              </li>
              <li>
                <span className="font-bold mr-2">メールアドレス:</span>
                <span>準備中です</span>
              </li>
            </ul>
            <p>毎日継続的に勉強を行い、日々新しい技術や知識を取り入れています。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
