import React from 'react'

const Profile: React.FC = () => (
  <div className="profile w-7-pc">
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
      <dd>専門学生3年</dd>
    </dl>
    <dl>
      <dt>資格</dt>
      <dd>
        応用情報技術者試験 <br />
        基本情報技術者試験 <br />
        HTML5 レベル2 <br />
        PHP技術者認定試験 準上級
      </dd>
    </dl>
  </div>
)

export default Profile
