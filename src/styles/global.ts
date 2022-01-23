import { css } from '@emotion/core'

export default css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    line-height: 1.6;
    font-family: Arial, sans-serif;
    color: #2d2d2d;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0 0 1rem;
  }

  ul {
    margin: 0 0 1rem;
    padding-inline-start: 1rem;
  }

  img {
    width: 100%;
  }

  .container {
    margin: 0 auto;
    padding: 0 1rem;
    transition: max-width 0.3s ease;

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;

    & > * {
      width: 100%;
      max-width: 100%;
    }

    .col- {
      &lg- {
        @media (min-width: 992px) {
          &5 {
            flex: 0 0 auto;
            padding: 0 15px;
            width: 50%;
          }
        }
      }
    }
  }

  .font-bold {
    font-weight: bold;
  }
`
