import styled, { keyframes } from 'styled-components'

export const ClientWrapper = styled.div`
  padding-top: 55px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background-color: #f0f2f5;
  @media only screen and (max-width: 624px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media only screen and (max-width: 480px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  .container {
    @media (min-width: 1566px) {
      max-width: 1430px;
    }
  }

  & .section-title {
    /* max-width: 508px; */
    /* height: 24px; */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #0f2137;

    @media (max-width: 1199px) {
      font-size: 24px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
    }
    @media (max-width: 425px) {
      max-width: 290px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`

const slideShow = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

export const ImageSlider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 57px 0px 25px;
  width: calc(100% - 60px);
  @media only screen and (max-width: 991px) {
    padding-top: 65px;
  }
  @media only screen and (max-width: 624px) {
    padding-top: 45px;
  }
  &::before,
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient(to right, #f0f2f5, rgba(255, 255, 255, 0));
    z-index: 1;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    transform: rotateZ(180deg);
  }
`

export const ImageSlide = styled.div`
  height: 40px;
  flex-shrink: 0;
  animation: ${slideShow} 20s linear infinite;
  a {
    margin: 0 35px;
    transition: all 0.3s ease;
    opacity: 0.6;
    @media only screen and (max-width: 991px) {
      margin: 0 20px;
    }
    @media only screen and (max-width: 624px) {
      margin: 0 5px;
    }
    img {
      @media only screen and (max-width: 1360px) {
        max-width: 90%;
      }
      @media only screen and (max-width: 991px) {
        max-width: 80%;
      }
    }

    &:hover {
      opacity: 1;
    }
  }
`

export default ClientWrapper
