import React from 'react'
import Avatar from '../../atoms/avatar'
import { Progress } from '../../atoms/observer'
import Profile from '../../atoms/profile'

import './style.css'

const About = () => {
  return (
    <section className="section about">
      <div className="l-inner">
        <h2 className="section-title">自己紹介</h2>

        <div className="l-flex-pc">
          <Avatar />
          <Profile />
        </div>

        {/* <div className="free">
          <p></p>
        </div> */}

        <div className="skills">
          <h3 className="section-title-sub">スキルセット</h3>
          <p>&#8251; もっとも得意なスキルを基準にしています</p>
          <div className="skills-wrap">
            <Progress title="PHP" value={100} />
            <Progress title="JavaScript" value={80} />
            <Progress title="Node.js" value={75} />
            <Progress title="React" value={70} />
            <Progress title="TypeScript" value={55} />
            <Progress title="Flutter" value={20} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
