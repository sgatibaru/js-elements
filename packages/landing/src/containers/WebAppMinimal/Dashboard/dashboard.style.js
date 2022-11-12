import { themeGet } from '@styled-system/theme-get';
import pattern1 from 'common/assets/image/webAppMinimal/pattern1.png';
import pattern2 from 'common/assets/image/webAppMinimal/pattern2.png';
import { rgba } from 'polished';
import { TabList, Tabs } from 'react-tabs';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #fff;
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  z-index: 20;
  @media (max-width: 1366px) {
    padding-bottom: 80px;
  }
  @media (max-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
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
export default Section;

export const SectionHeading = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 70px;
  h2 {
    font-weight: 800;
    font-size: 28px;
    line-height: 1.36;
    letter-spacing: -0.2px;
    @media only screen and (max-width: 480px) {
      font-size: 24px;
      line-height: 1.5;
    }
  }
  p {
    color: ${rgba('#000', 0.7)};
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 2.22;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (max-width: 1024px) {
      max-width: 700px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 2;
      max-width: 550px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
`;

export const ReactTabs = styled(Tabs)``;

export const TabNavbar = styled(TabList)`
  --dividerWidth: 100%;
  // gap: 15px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 60px;
  // grid-template-columns: repeat(3, 1fr);
  position: relative;
  @media only screen and (min-width: 768px) {
    // gap: 0;
    margin-bottom: 70px;
    max-width: 650px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 750px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1040px;
  }
  // @media only screen and (min-width: 1366px) {
  //   gap: 140px;
  // }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 80px;
    // gap: 150px;
  }
  > li {
    width: calc(100% / 3);
    flex: 0 0 calc(100% / 3);
    @media only screen and (min-width: 1280px) {
      &:first-child {
        .divider-line {
          --dividerWidth: 50%;
        }
      }
      &:last-child {
        .divider-line {
          --dividerWidth: 50%;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .react-tabs__tab--selected {
      .divider-line {
        &:before {
          transform: scaleX(1);
        }
      }
    }
    .image-wrapper {
      position: relative;
    }
    .divider-line {
      position: absolute;
      top: 50%;
      width: var(--dividerWidth);
      transform: translateY(-50%);
      height: 5px;
      &:before {
        background-color: #5C97F2;
        z-index: 1;
        transition: transform .4s ease-out;
        transform-origin: left;
        transform: scaleX(0);
      }
      &:after,
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
      &:after {
        opacity: 0.15;
        border-top: 5px dashed #011336;
      }
      &.right {
        right: 0;
      }
      &.left {
        left: 0;
      }
    }
  }
  figure {
    margin: 0;
    position: relative;
    cursor: pointer;
    &:hover {
      img {
        transform: translateY(-4px);
      }
    }
    img {
      margin: 0 auto;
      max-width: 65px;
      transition: transform .4s ease;
      @media only screen and (min-width: 768px) {
        max-width: 100%;
      }
      @media only screen and (min-width: 1280px) {
        position: relative;
        z-index: 1;
      }
    }
  }
  figcaption {
    font-size: 13px;
    line-height: 1.3;
    text-align: center;
    color: ${themeGet('colors.dark')};
    font-family: Inter, sans-serif;
    margin-top: 15px;
    margin-bottom: 0;
    @media only screen and (min-width: 768px) {
      font-size: 16px;
      margin-top: 20px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 17px;
    }
  }
`;

export const Illustration = styled.figure`
  margin: 0;
  position: relative;
  animation-duration: 400ms;
  img {
    @media (min-width: 1280px) and (max-width: 1140px) {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  ::before,
  ::after {
    content: '';
    position: absolute;
    z-index: -1;
  }
  ::before {
    background: transparent url(${pattern1?.src}) no-repeat;
    width: 223px;
    height: 202px;
    left: 0;
    top: -5px;
    @media (min-width: 1025px) and (max-width: 1440px) {
      left: 80px;
      top: -25px;
    }
    @media (max-width: 1024px) {
      margin-top: -15px;
    }
    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
      background-size: contain;
      top: -10px;
    }
    @media (max-width: 480px) {
      width: 100px;
      height: 100px;
      background-size: contain;
      top: -10px;
    }
  }
  ::after {
    background: transparent url(${pattern2?.src}) no-repeat;
    height: 223px;
    width: 202px;
    right: -30px;
    bottom: -35px;
    @media (min-width: 1025px) and (max-width: 1440px) {
      right: 95px;
      bottom: -55px;
    }
    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
      background-size: contain;
      bottom: -10px;
    }
    @media (max-width: 480px) {
      width: 100px;
      height: 100px;
      background-size: contain;
      bottom: -10px;
    }
  }
`;
