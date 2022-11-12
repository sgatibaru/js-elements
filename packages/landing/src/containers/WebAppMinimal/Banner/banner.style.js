import { rgba } from 'polished';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import pattern1 from 'common/assets/image/webAppMinimal/banner-pattern-1.png';
import pattern2 from 'common/assets/image/webAppMinimal/banner-pattern-2.png';

const Section = styled.section`
  background-color: #011336;
  position: relative;
  z-index: 0;
  &::after {
    background-color: #fff;
    content: '';
    position: absolute;
    width: 100%;
    bottom: -1px;
    height: 45px;
    @media only screen and (min-width: 768px) {
      bottom: -1px;
      height: 80px;
    }
    @media only screen and (min-width: 1024px) {
      height: 90px;
    }
    @media only screen and (min-width: 1280px) {
      height: 170px;
    }
    @media only screen and (min-width: 1366px) {
      height: 130px;
    }
  }
  .container {
    @media only screen and (max-width: 1366px) {
      max-width: 1170px;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 960px;
    }
  }
`;

export const Pattern = styled.div`
  @media only screen and (min-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    &::before,
    &::after {
      content: '';
      position: absolute;
    }
    &::before {
      background: url(${pattern1?.src}) no-repeat;
      width: 674px;
      top: 0;
      height: 811px;
      @media only screen and (min-width: 768px) {
        background-size: 30%;
      }
      @media only screen and (min-width: 1024px) {
        background-size: 55%;
      }
      @media only screen and (min-width: 1440px) {
        background-size: 70%;
      }
      @media only screen and (min-width: 1920px) {
        background-size: 100%;
      }
    }
    &::after {
      background: url(${pattern2?.src}) no-repeat;
      right: 0;
      top: 200px;
      width: 444px;
      height: 654px;
      @media only screen and (min-width: 768px) {
        background-size: 30%;
        background-position: right 0;
      }
      @media only screen and (min-width: 1024px) {
        background-size: 60%;
      }
      @media only screen and (min-width: 1440px) {
        background-size: 70%;
      }
      @media only screen and (min-width: 1920px) {
        background-size: 100%;
      }
    }
  }
`;

export const BannerContentWrapper = styled.div`
  @media (min-width: 1280px) {
    min-height: 100vh;
  }
`;

export const BannerContent = styled.div`
  padding-top: 210px;
  max-width: 870px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1366px) {
    padding-top: 170px;
    max-width: 750px;
  }
  @media (max-width: 1024px) {
    max-width: 660px;
  }
  @media (max-width: 768px) {
    max-width: 550px;
    padding-top: 130px;
  }
  @media (max-width: 480px) {
    padding-top: 100px;
  }
  h2 {
    color: ${themeGet('colors.white')};
    font-weight: 600;
    font-size: 54px;
    line-height: 1.48;
    text-align: center;
    letter-spacing: -1px;
    @media (max-width: 1366px) {
      font-size: 48px;
    }
    @media (max-width: 1024px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      font-size: 32px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 2.11;
    color: ${rgba('#fff', 0.6)};
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 1.6;
    }
  }
`;

export const Figure = styled.figure`
  margin: 30px 0 0;
  position: relative;
  text-align: center;
  z-index: 10;
  > div {
    filter: drop-shadow(0px 4px 50px rgba(86, 99, 132, 0.1));
  }
  @media (min-width: 768px) {
    margin-top: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1024px) {
    max-width: 720px;
    margin-top: 50px;
  }
  @media (min-width: 1366px) {
    max-width: 1040px;
  }
  @media (min-width: 1440px) {
    max-width: 100%;
  }
  @media (min-width: 1600px) {
    margin-top: 60px;
  }
`;

export default Section;
