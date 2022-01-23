/* eslint-disable react/no-array-index-key */
import React from 'react'

const progressList = [
  {
    value: 85,
    title: 'PHP'
  },
  {
    value: 75,
    title: 'JavaScript'
  },
  {
    value: 65,
    title: 'Node.js'
  },
  {
    value: 60,
    title: 'React'
  },
  {
    value: 50,
    title: 'TypeScript'
  },
  {
    value: 10,
    title: 'Flutter'
  }
]

interface Props {
  title: string
  value: number
}

const Progress: React.FC<Props> = ({ title, value }) => {
  return (
    <div className="progress">
      <div className="progress-header">
        <div>{title}</div>
        <span className="progress-value">{value}%</span>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

const Progresses = () => {
  const { length } = progressList
  const count = Math.floor(length / 2)
  if (length <= 4) {
    return (
      <>
        {progressList.map((progress, index) => (
          <Progress title={progress.title} value={progress.value} key={index} />
        ))}
      </>
    )
  }
  return (
    <>
      <div className="col-lg-5">
        {progressList.slice(0, count).map((progress, index) => (
          <Progress title={progress.title} value={progress.value} key={index} />
        ))}
      </div>
      <div className="col-lg-5">
        {progressList.slice(count, length).map((progress, index) => (
          <Progress title={progress.title} value={progress.value} key={index} />
        ))}
      </div>
    </>
  )
}

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>今後伸ばしたいスキルなどについて書く。あくまで主観ということも</p>
        </div>
        <div className="row content">
          <Progresses />
        </div>
      </div>
    </section>
  )
}

export default Skills
