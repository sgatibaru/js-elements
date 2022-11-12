import styled from 'styled-components'

const ScrollableStickyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const MockupImageWrapper = styled.div`
  position: sticky;
  top: 150px;
  z-index: 1;

  align-self: center;
  margin-left: 40%;
  margin-top: -800px;
  overflow: hidden;

  @media (max-width: 1566px) {
    margin-top: -630px;
    top: 120px;
  }
  @media (max-width: 1440px) {
    margin-top: -670px;
  }
  @media (max-width: 1200px) {
    margin-top: -550px;
    margin-left: 50%;
  }
  @media (max-width: 1024px) {
    margin-top: -550px;
    margin-left: 50%;
  }
  @media (max-width: 1024px) {
    display: none;
  }

  & > div {
  }
`

export const Mockup = styled.div`
  /* height: 88vh; */
  /* height: 83vh;
  max-height: 870px; */
  position: relative;
  /* overflow: hidden; */

  height: 754px;

  @media (max-width: 1566px) {
    height: 600px;
  }
  @media (max-width: 1200px) {
    height: 500px;
  }
`

export const MockupFrame = styled.div`
  height: 100%;
  & > div {
    height: 100%;
  }
  & .mockup-image {
    z-index: 1;
  }
`

export const ScreenImageWrapper = styled.div`
  width: calc(100% - 9%);
  height: 96%;
  position: absolute;
  top: 10px;
  left: 4.5%;

  .screen-image-animation {
    animation: screenImage 2s linear 1;

    @keyframes screenImage {
      from {
        top: 876px;
      }
      to {
        top: 10px;
      }
    }
  }

  & .fade {
  }

  & > div {
    height: 100%;
    object-fit: contain;
  }

  & img {
  }
`

export default ScrollableStickyWrapper
