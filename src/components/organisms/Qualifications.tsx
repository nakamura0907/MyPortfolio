import React from 'react'

const Qualifications = () => {
  return (
    <section className="qualifications" id="qualifications">
      <div className="container">
        <div className="section-title">
          <h2>Qualifications</h2>
          <p>
            今後は、ネットワークスペシャリスト試験やデータベーススペシャリスト試験の合格を目指しています。
            ベンダー資格では、LPICやAWS認定試験などの合格を目標としています。
          </p>
        </div>
        <div className="content">
          <ul className='grid grid-lg-2'>
            <li>
                <span className="font-bold mr-2">応用情報技術者試験:</span>
                <span>令和3年秋期</span>
            </li>
            <li>
                <span className="font-bold mr-2">基本情報技術者試験:</span>
                <span>令和3年春期</span>
            </li>
            <li>
                <span className="font-bold mr-2">HTML5 レベル2:</span>
                <span>???</span>
            </li>
            <li>
                <span className="font-bold mr-2">HTML5 レベル1:</span>
                <span>???</span>
            </li>
            <li>
                <span className="font-bold mr-2">PHP技術者認定試験 準上級:</span>
                <span>平成31年11月</span>
            </li>
            <li>
                <span className="font-bold mr-2">ITパスポート:</span>
                <span>令和2年7月</span>
            </li>
            <li>
                <span className="font-bold mr-2">Excel 2016 スペシャリスト:</span>
                <span>平成31年3月</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Qualifications
