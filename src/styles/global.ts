import { css } from '@emotion/react'
import { color, font, mediaQuery } from './valiables'

export default css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${font.size};
  }

  body {
    margin: 0;
    line-height: 1.6;
    font-family: ${font.family.default};
    color: ${font.color};

    @media (max-width: ${mediaQuery.xl - 1}px) {
      &.is-open {
        overflow: hidden;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1.3;
    font-family: ${font.family.headline};
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

  .avatar {
    &-circle {
      border-radius: 50%
    }
  }

  .nav-toggle {
    position: fixed;
    top: 1.4rem;
    right: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${color.primary.main};
    color: ${color.primary.text};
    cursor: pointer;
    z-index: 9999;

    @media (min-width: ${mediaQuery.xl}px) {
      display: none;
    }
  }

  .main {
    @media (min-width: ${mediaQuery.xl}px) {
      margin-left: 300px;
    }
  }

  .container {
    margin: 0 auto;
    padding: 0 1rem;
    transition: max-width 0.3s ease;

    @media (min-width: ${mediaQuery.md}px) {
      max-width: 720px;
    }

    @media (min-width: ${mediaQuery.lg}px) {
      max-width: 960px;
    }

    @media (min-width: ${mediaQuery.xl}px) {
      max-width: 1140px;
    }
  }

  .footer {
    margin-top: 1.9rem;
    padding: 1.4rem 1rem;
    color: ${color.background.text};
    background: ${color.background.main};

    a {
      color: white;
    }
  }

  .scroll-top {
    position: fixed;
    bottom: 1.4rem;
    right: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${color.primary.main};
    color: ${color.primary.text};
    cursor: pointer;
    z-index: 9999;

    @media (min-width: ${mediaQuery.xl}px) {
      display: none;
    }
  }

  .grid {
    display: grid;

    &-md- {
      @media (min-width: ${mediaQuery.md}px) {
        &2 {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }

    &-lg- {
      @media (min-width: ${mediaQuery.lg}px) {
        &2 {
          grid-template-columns: repeat(2, 1fr);
        }
        &3 {
          grid-template-columns: repeat(3, 1fr);
        }
      }
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
        @media (min-width: ${mediaQuery.lg}px) {
          &3 {
            padding: 0 15px;
            width: 30%;
          }

          &5 {
            flex: 0 0 auto;
            padding: 0 15px;
            width: 50%;
          }

          &7 {
            flex: 0 0 auto;
            padding: 0 15px;
            width: 70%;
          }
        }
      }
    }
  }

  .l-flex {
    display: flex;
    &-justify-center {
      justify-content: center;
    }
  }

  .mr-2 {
    display: inline-block;
    margin-right: .7rem;
  }

  .font-bold {
    font-weight: bold;
  }
`
