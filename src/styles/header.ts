import { css } from '@emotion/react'
import { color, mediaQuery } from './valiables'

export default css`
  position: fixed;
  left: -300px;
  top: 0;
  padding: 0 1rem;
  width: 300px;
  height: 100vh;
  color: ${color.background.text};
  background: ${color.background.main};
  transition: left 0.3s ease;
  z-index: 9900;

  @media (min-width: ${mediaQuery.xl}px) {
    left: 0;
  }

  a {
    color: ${color.background.text};
    text-decoration: none;
  }

  .is-open & {
    @media (max-width: ${mediaQuery.xl - 0.01}px) {
      left: 0;
    }
  }

  .profile,
  .header-nav {
    margin-top: 1.9rem;
  }

  .site-title {
    text-align: center;
    a {
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 0.85);
    }
  }

  .avatar {
    margin-top: 1.4rem;
  }

  .header-nav {
    &-list {
      padding: 0;
      list-style-type: none;
    }

    &-item {
      padding-left: 1rem;
      text-transform: uppercase;
      &.is-active {
        background: #414141;
      }
    }

    a {
      display: block;
      padding: 0.7rem 0;
      transition: color 0.3s ease;
      &:hover {
        color: ${color.primary.main};
      }
    }
  }
`
