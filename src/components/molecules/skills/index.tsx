import React from 'react'
import { Progress } from '../../atoms/observer'

const Skills: React.FC = () => (
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
)

export default Skills
