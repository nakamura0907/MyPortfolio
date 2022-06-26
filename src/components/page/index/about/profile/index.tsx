import React from 'react'

import './style.css'

const Profile: React.FC = () => (
  <div className="profile">
    <dl>
      <dt>名前</dt>
      <dd>Nakamura0907</dd>
    </dl>
    <dl>
      <dt>生年月日</dt>
      <dd>1999年09月07日</dd>
    </dl>
    <dl>
      <dt>職業</dt>
      <dd>専門学校生3年</dd>
    </dl>
    <dl>
      <dt>資格・試験</dt>
      <dd>
        情報処理安全確保支援士試験 合格
        <br />
        応用情報技術者試験 合格
        <br />
        基本情報技術者試験 合格
        <br />
        HTML5プロフェッショナル認定試験 レベル2 合格
        <br />
        PHP技術者認定試験 準上級 合格
      </dd>
    </dl>
  </div>
)

export default Profile
