import styled from 'styled-components'

const BannerWrapper = styled.section`
  position: relative;
  background-color: #000;
  padding-top: 130px;
  padding-bottom: 130px;
  @media (min-width: 768px) {
  }
  @media (max-width: 1566px) {
  }
  @media (max-width: 1024px) {
    padding-bottom: 70px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 1566px) {
      max-width: 1430px;
    }
    @media (max-width: 1200px) {
      align-items: center;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

export const ContentWrapper = styled.section`
  flex: 0 0 46%;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  @media (max-width: 1566px) {
    padding-top: 80px;
    gap: 5px;
  }
  @media (max-width: 1200px) {
    gap: 0px;
  }
  @media (max-width: 1024px) {
    /* padding-top: 0px; */
    flex: 0 0 100%;
    text-align: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
  }

  .section-title {
    max-width: 637px;
    max-height: 151px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 58px;
    line-height: 75px;
    letter-spacing: -1px;
    color: #ffffff;
    margin-bottom: 15px;
    @media (max-width: 1566px) {
      font-size: 48px;
      line-height: 65px;
      max-width: 550px;
    }
    @media (max-width: 1200px) {
      font-size: 38px;
      line-height: 55px;
    }
    @media (max-width: 768px) {
      max-width: 450px;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 480px) {
      line-height: 40px;
      font-size: 32px;
      max-width: 360px;
    }
    @media (max-width: 425px) {
      font-size: 28px;
      max-width: 310px;
    }
  }
  .paragraph {
    max-width: 552px;
    /* max-height: 114px; */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 38px;
    letter-spacing: -0.3px;
    color: #ffffff;
    opacity: 0.8;
    @media (max-width: 1566px) {
      font-size: 16px;
      line-height: 30px;
    }
    @media (max-width: 1199px) {
      max-width: 400px;
    }
    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 480px) {
      font-size: 15px;
      max-width: 350px;
      line-height: 25px;
    }
  }
  .tagLine {
    margin-bottom: 0;
    max-width: 213px;
    max-height: 20px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #ffffff;
    @media (max-width: 768px) {
      font-size: 14px;
      margin: 0 auto;
    }
  }
`

export const EmailWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  max-width: 480px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 1566px) {
    max-width: 430px;
  }
  @media (max-width: 1200px) {
    max-width: 400px;
  }
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 480px) {
    margin-top: 30px;
    margin-bottom: 20px;
    /* width: 90%;
    height: 90%; */
  }
  .input-icon {
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
    z-index: 10;
  }
  .input-email {
    width: 100%;
    max-width: 480px;
    max-height: 70px;
    background-color: rgb(51, 51, 51);
    border-radius: 5px;
    border: none;
    outline: none;
    height: 70px;
    border-radius: 5px;
    font-size: 16px;
    letter-spacing: -0.3px;
    color: #fff;
    padding-left: 60px;
    padding-right: 80px;
    transition: all 500ms ease;
    @media (max-width: 1550px) {
      height: 60px;
      max-width: 430px;
      padding-right: 70px;
    }
    @media (max-width: 1199px) {
      max-width: 400px;
    }
    &::placeholder {
      color: #ffffff;
      opacity: 0.4;
      max-width: 161px;
      max-height: 19px;
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.3px;
    }
    &:focus {
      box-shadow: 0 0 0 1px #aaa;
    }
  }
  .input-button {
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 70px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: white;
    color: #000;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    opacity: 1;
    cursor: pointer;
    transition: opacity 500ms ease;
    &:hover {
      opacity: 0.85;
    }
    @media (max-width: 1550px) {
      height: 60px;
      width: 70px;
    }
  }
`

export const DownloadButtonWrapper = styled.section`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 480px) {
    justify-content: center;
  }
  .download-button {
    background-color: #fff;
    border: 1px solid #081c27;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding-left: 17px;
    padding-right: 17px;
    text-align: left;
    color: #081c27;
    padding-top: 14.5px;
    padding-bottom: 14.5px;
    transition: all 500ms ease;
    @media (max-width: 1024px) {
      padding-left: 5px;
      padding-right: 5px;
    }
    @media (max-width: 480px) {
      padding-left: 5px;
      padding-right: 5px;
    }
    &:hover {
      opacity: 0.85;
      cursor: pointer;
      img {
        filter: invert(20%);
      }
    }
    /* + .download-button {
      margin-left: 16px;
      @media (max-width: 414px) {
        margin-left: 10px;
      } */
  }
  .download-button-icon {
    flex-shrink: 0;
    filter: invert(0%);
    transition: 500ms ease;
  }
  .download-button-content {
    margin-left: 17px;
    @media (max-width: 480px) {
      margin-left: 0px;
    }
    @media (max-width: 414px) {
      margin-left: 0px;
    }
  }
  .download-button-content-text {
    margin: 0;
    display: block;
    font-size: 13px;
    line-height: 1;
    letter-spacing: 0.2px;
    opacity: 0.8;
  }
  .download-button-content-title {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    margin-top: 5px;
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`

export const ImageWrapper = styled.section`
  display: none;
  @media (max-width: 1024px) {
    display: inline;
    width: 40%;
    height: auto;
    object-fit: contain;
    margin-top: 50px;
  }
  @media (max-width: 700px) {
    width: 60%;
    height: auto;
    object-fit: contain;
  }

  .react-reveal {
    background-color: inherit;
  }
`

export default BannerWrapper
