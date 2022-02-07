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
      font-size: 2.8rem;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 80px;
        height: 3px;
        background: ${color.primary.main};
      }
    }
  }

  /* .hero */

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    h1 {
      font-size: 3.9rem;
      text-align: center;
    }

    h2 {
      font-size: 1.9rem;
      opacity: 0;
      animation: fadeIn forwards 2s ease 0s 1;

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
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
  .skills {
    .content {
      column-gap: 20px;
    }

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

    @media (min-width: ${mediaQuery.lg}px) {
      .content > div {
        flex: 1;
      }
    }
  }

  .works {
    .content {
      .work {
        transition: transform 0.3s ease;
        &:hover {
          transform: scale(1.2);
        }
      }

      @media (max-width: ${mediaQuery.md - 1}px) {
        .work-wrap {
          margin: 0 auto;
          max-width: 350px;
          max-height: 350px;
        }
      }
      @media (min-width: ${mediaQuery.md}px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .work-wrap {
          width: 50%;
        }
      }

      @media (min-width: ${mediaQuery.lg}px) {
        .work-wrap {
          width: 33%;
        }
      }
    }
  }
`
