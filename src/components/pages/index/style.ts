import { css } from '@emotion/react'

export const styled = css`
  .hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: white;

    &-background {
      width: 100%;
      height: 100%;
      position: absolute;
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;

      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: #747474;
        opacity: 0.65;
      }
    }

    &-title {
      position: relative;
      font-size: 4rem;
      text-align: center;
    }
  }
`
