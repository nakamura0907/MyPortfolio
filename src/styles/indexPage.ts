import { css } from '@emotion/react'
import { color, mediaQuery } from './valiables'

export default css`
  section:not(:first-of-type) {
    padding-top: 1.99rem;
  }

  .section-title {
    margin-bottom: 1.41rem;

    & h2 {
      position: relative;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 40px;
        height: 3px;
        background: ${color.primary.main};
      }
    }
  }

  /* .hero */

  .hero {
    height: 100vh;
    /* display: none; */
  }

  /* .about */

  .about {

    .avatar {
      margin-bottom: 1.4rem;
    }

    h3 {
      margin-bottom: 0.5rem;
      padding: 0.5rem 0.35rem;
      color: ${color.secondary.text};
      background: ${color.secondary.main};
      text-transform: uppercase;
    }

    .col- {
      @media (min-width: ${mediaQuery.lg}px) {
        &lg- {
          &3 {
            min-width: fit-content;
            flex: 1;
          }

          &7 {
            flex: 2;
          }
        }
      }
    }
  }

  .qualifications {
    .content {
      border-left: 1px solid ${color.primary.main};

    }

    ul {
      margin-left: 1rem;
    }

    li {
      padding-top: 1.4rem;
      padding-right: 1rem;
      padding-bottom: 1.4rem;
    }
  }

  /* .Skills */
  .progress {
    margin-bottom: 0.7rem;

    &-header {
      display: flex;
      span {
        display: block;
        margin-left: auto;
      }
    }

    &-bar {
      height: 15px;
      background: ${color.primary.main};

      &-container {
        overflow: hidden;
        height: 15px;
        border-radius: 4px;
        background: #afd0dd;
      }
    }
  }

  /** .works */
  .works {
    .content {
      display: flex;
      flex-wrap: wrap;
      &-wrap {
        position: relative;
        width: 100%;

        @media (min-width: ${mediaQuery.md}px) {
          width: 50%;
        }

        @media (min-width: ${mediaQuery.lg}px) {
          width: 33%;
        }

        &:before {
          content: "";
          display: block;
          padding-top: 100%
        }
      }
    }
    .work-wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }

    .work {
      transition: transform .3s ease;
    }
    .work:hover {
      transform: scale(1.2);
    }
  }
`
