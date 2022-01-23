import { css } from '@emotion/core'

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
        background: #15a6e2;
      }
    }
  }

  /* .hero */

  .hero {
    /* height: 100vh; */
    display: none;
  }

  /* .about */

  .about {
    h3 {
      margin-bottom: 0.5rem;
      padding: 0.5rem 0.35rem;
      color: white;
      background: #67b7d6;
      text-transform: uppercase;
    }

    .font-bold {
      display: inline-block;
      margin-right: 0.5rem;
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
      background: #15a6e2;

      &-container {
        overflow: hidden;
        height: 15px;
        border-radius: 4px;
        background: #afd0dd;
      }
    }
  }
`
