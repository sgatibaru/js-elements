import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
// import BgImage from 'common/assets/image/foodDelivery/feature-bg.png'
const QualityFeaturesWrapper = styled.section`
  background-color: #000000;
  color: white;
  margin-top: 87px;
  padding-top: 90px;
  padding-bottom: 120px;

  @media (max-width: 1440px) {
    padding-bottom: 50px;
    background-position: center center;
  }
  @media (max-width: 480px) {
    padding-top: 70px;
    padding-bottom: 30px;
  }

  .container {
    @media (min-width: 1566px) {
      max-width: 1430px;
    }
  }

  .section-title {
    margin: 0;
    margin-bottom: 138px;

    /* max-width: 329px; */
    /* height: 31px; */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    text-align: center;
    color: #ffffff;

    @media (max-width: 1440px) {
      margin-bottom: 100px;
    }
    @media (max-width: 1200px) {
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

export const PostsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 0;
  @media (max-width: 768px) {
    margin-left: -10px;
    margin-right: -10px;
  }

  .post {
    flex: 0 0 33.333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 70px;
    @media (max-width: 1440px) {
      margin-bottom: 40px;
    }
    @media (max-width: 768px) {
      max-width: 270px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 10px;
      padding-right: 10px;
    }
    @media (max-width: 480px) {
      flex: 0 0 50%;
    }
    @media (max-width: 375px) {
      flex: 0 0 100%;
    }
    .post-icon {
      width: 50px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 55px;
    }
    .post-title {
      margin: 0;
      margin-bottom: 15px;

      max-width: 165px;
      max-height: 22px;
      overflow: hidden;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #ffffff;
    }
    .post-description {
      margin-left: auto;
      margin-right: auto;

      max-width: 261px;
      height: 84px;
      overflow: hidden;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 28px;
      text-align: center;
      color: #ffffff;
      opacity: 0.8;
    }
  }
`

export default QualityFeaturesWrapper
