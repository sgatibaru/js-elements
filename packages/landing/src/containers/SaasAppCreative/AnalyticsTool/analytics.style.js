import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  background: linear-gradient(59.39deg, #f7f7f0 26.57%, #e6f3f0 83.11%);
  padding-top: 130px;
  padding-bottom: 200px;
  @media (max-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 110px;
  }
  @media (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 95px;
  }
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 60px;
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

export const Grid = styled.div`
  gap: 100px;
  display: grid;
  align-items: center;
  grid-template-columns: 660px auto;
  @media only screen and (max-width: 1536px) {
    gap: 80px;
    grid-template-columns: 640px 1fr;
  }
  @media (max-width: 1440px) {
    grid-template-columns: 650px 1fr;
  }
  @media (max-width: 1366px) {
    gap: 60px;
  }
  @media (max-width: 1024px) {
    gap: 60px;
    grid-template-columns: 450px 1fr;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const FigureGroup = styled.div`
  position: relative;
  margin-right: 40px;
  @media only screen and (min-width: 768px) {
    margin-right: 60px;
    max-width: 500px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1024px) {
    margin-right: 45px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 530px;
    margin-right: 65px;
  }
  @media only screen and (min-width: 1366px) {
    margin-right: 105px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: none;
    margin-right: 65px;
  }
  @media only screen and (min-width: 1536px) {
    margin-right: 105px;
  }
  .graph-2 {
    position: absolute;
    right: -40px;
    bottom: -40px;
    max-width: 190px;
    @media only screen and (min-width: 768px) {
      right: -50px;
      bottom: -50px;
      max-width: none;
    }
    @media only screen and (min-width: 1024px) {
      right: -45px;
      bottom: -40px;
      max-width: 270px;
    }
    @media only screen and (min-width: 1440px) {
      right: -75px;
      max-width: 370px;
    }
  }
`;

export const Content = styled.div`
  text-align: center;
  max-width: 465px;
  @media only screen and (max-width: 767px) {
    margin-top: 80px;
  }
  @media only screen and (min-width: 768px) {
    margin: 90px auto 0;
  }
  @media only screen and (min-width: 1024px) {
    text-align: left;
    margin-top: 0;
  }
  @media only screen and (min-width: 1440px) {
    margin-left: 0;
  }
  .subtitle {
    color: ${themeGet('colors.secondary')};
    font-family: 'Caveat', cursive;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
    @media (max-width: 1366px) {
      font-size: 22px;
      margin-bottom: 6px;
    }
  }
  h2 {
    font-family: 'Noto Serif KR', serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 1.39;
    letter-spacing: -0.02em;
    @media (max-width: 1366px) {
      font-size: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 26px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  .description {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 2;
    color: ${themeGet('colors.textColor')};
  }
  .explore {
    color: ${themeGet('colors.linkColor')};
    font-weight: 700;
    img {
      line-height: 1;
      transform: translateX(0px);
      transition: 0.3s ease 0s;
      margin-left: 6px;
    }
    &:hover img {
      transform: translateX(3px);
    }
  }
`;

export default Section;
