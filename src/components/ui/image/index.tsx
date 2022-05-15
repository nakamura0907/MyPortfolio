import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import './style.css'
import { FadeUp } from '../inview'

type LogoBannerProps = {
  className?: string
}
export const LogoBanner: React.FC<LogoBannerProps> = ({ className }) => (
  <div className={classnames('logo', className)}>
    <Link to="/">
      <StaticImage src="../../../images/logo-banner.png" alt="ポートフォリオサイトロゴ" />
    </Link>
  </div>
)

export const Avatar = () => (
  <div className="avatar">
    <StaticImage width={200} height={200} src="../../../images/avatar.png" alt="avatar" />
  </div>
)

const WorkImageBase: React.FC = ({ children }) => {
  return <FadeUp>{children}</FadeUp>
}

const DisappearChat = () => (
  <Link to="/disappear-chat">
    <WorkImageBase>
      <StaticImage src="../../../images/works/disappear-chat/thumbnail.png" alt="消えるチャット サムネイル" />
    </WorkImageBase>
  </Link>
)
const PHPBBS = () => (
  <Link to="/PHP-BBS">
    <WorkImageBase>
      <StaticImage src="../../../images/works/PHP-BBS/thumbnail.png" alt="PHP-BBS サムネイル" />
    </WorkImageBase>
  </Link>
)
const ToDoNext = () => (
  <Link to="/to-do-next">
    <WorkImageBase>
      <StaticImage src="../../../images/works/to-do-next/thumbnail.png" alt="to-do-next サムネイル" />
    </WorkImageBase>
  </Link>
)
const DummyPassport = () => (
  <Link to="/dummy-passport">
    <WorkImageBase>
      <StaticImage src="../../../images/works/dummy-passport/thumbnail.png" alt="dummy-passport サムネイル" />
    </WorkImageBase>
  </Link>
)
const MyDiary = () => (
  <Link to="/MyDiary">
    <WorkImageBase>
      <StaticImage src="../../../images/works/MyDiary/thumbnail.png" alt="MyDiary サムネイル" />
    </WorkImageBase>
  </Link>
)
const TranslationLinebot = () => (
  <Link to="/translation-linebot">
    <WorkImageBase>
      <StaticImage src="../../../images/works/translation-linebot/thumbnail.png" alt="translation-linebot サムネイル" />
    </WorkImageBase>
  </Link>
)
const TownWPTheme = () => (
  <Link to="/Town-WPTheme">
    <WorkImageBase>
      <StaticImage src="../../../images/works/Town-WPTheme/thumbnail.png" alt="Town-WPTheme サムネイル" />
    </WorkImageBase>
  </Link>
)
const NowWeather = () => (
  <Link to="/now-weather">
    <WorkImageBase>
      <StaticImage src="../../../images/works/now-weather/thumbnail.png" alt="now-weather サムネイル" />
    </WorkImageBase>
  </Link>
)
const ToDoFlutter = () => (
  <Link to="/to-do-flutter">
    <WorkImageBase>
      <StaticImage src="../../../images/works/to-do-flutter/thumbnail.png" alt="to-do-flutter サムネイル" />
    </WorkImageBase>
  </Link>
)
const CPG = () => (
  <Link to="/cpg-chrome-extension">
    <WorkImageBase>
      <StaticImage src="../../../images/works/cpg-chrome-extension/thumbnail.png" alt="cpg-chrome-extension サムネイル" />
    </WorkImageBase>
  </Link>
)

export const Works = [
  DisappearChat,
  PHPBBS,
  ToDoNext,
  DummyPassport,
  MyDiary,
  TranslationLinebot,
  TownWPTheme,
  NowWeather,
  ToDoFlutter,
  CPG
]
