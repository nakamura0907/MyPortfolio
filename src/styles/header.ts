import { css } from '@emotion/core'

export default css`
  position: fixed;
  left: -300px;
  top: 0;
  padding: 0 1rem;
  width: 300px;
  height: 100vh;
  background: red;
  transition: left 0.3s ease;
  z-index: 9999;

  .is-active & {
    left: 0;
  }
`
