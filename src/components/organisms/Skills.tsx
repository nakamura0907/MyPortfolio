/* eslint-disable react/no-array-index-key */
import React from 'react'

const progressList = [
  {
    value: 100,
    title: 'PHP'
  },
  {
    value: 80,
    title: 'JavaScript'
  },
  {
    value: 75,
    title: 'Node.js'
  },
  {
    value: 70,
    title: 'React'
  },
  {
    value: 55,
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
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p><span className="font-bold">もっとも得意なスキルを100%</span>として、自らのスキルを主観的に判断してみました。</p>
          <p>
            既にある程度の知識を持つPHPと、クロスプラットフォーム対応のFlutterを重点的に伸ばしたいです。
            その経験をもとに他言語のスキルを底上げし、PHP・Flutterのスペシャリストかつ様々な言語に対応可能なエンジニアを目指します。
          </p>
        </div>
        <div className="row content">
          <Progresses />
        </div>
      </div>
    </section>
  )
}

export default Skills
