import React from 'react'
import { Progress } from '@src/components/ui/inview'

import './style.css'

const Skills = () => {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <p>&#8251; もっとも得意なスキルを基準にしています</p>
      <div className="progress-wrap">
        <Progress title="PHP" value={100} />
        <Progress title="JavaScript" value={80} />
        <Progress title="Node.js" value={75} />
        <Progress title="React" value={70} />
        <Progress title="TypeScript" value={55} />
        <Progress title="Flutter" value={20} />
        <Progress title="AdobeXD" value={10} />
        <Progress title="AWS" value={5} />
      </div>
    </div>
  )
}

export default Skills
