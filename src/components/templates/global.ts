import { css } from '@emotion/react'

export const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    /* scroll-behavior: smooth; */
  }
  body {
    font-family: 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', 'Meiryo', '游ゴシック', 'Yu Gothic', 'ＭＳ Ｐゴシック',
      'MS PGothic', sans-serif;
    background-color: #efefef;
    line-height: 1.6;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Times New Roman', Times, serif;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  .l-inner {
    padding: 0 1.4rem;
  }

  .l-site {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .main {
    margin-bottom: auto;
  }

  .section {
    padding: 5.65rem 0 0;

    &:last-child {
      padding-bottom: 5.65rem;
    }

    &-title {
      position: relative;
      margin-bottom: 1.9rem;
      padding-bottom: 0.7rem;
      font-size: 2rem;
      text-transform: capitalize;

      &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0px;
        display: block;
        width: 50px;
        height: 2px;
        background: #006bda;
      }

      &-sub {
        margin-bottom: 1.4rem;
        font-size: 1.4rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .main .l-inner {
      margin-left: auto;
      margin-right: auto;
      max-width: 1200px;
    }

    .l-flex-pc {
      display: flex;
    }

    .w-3-pc {
      width: 30%;
    }
    .w-7-pc {
      width: 70%;
    }
  }
`
