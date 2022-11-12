import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  background: linear-gradient(100.58deg, #fef8ed 11.8%, #faeeeb 80.47%);
  padding-top: 130px;
  padding-bottom: 100px;
  @media (max-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
  @media (max-width: 768px) {
    padding-top: 60px;
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
  gap: 160px;
  display: grid;
  align-items: center;
  grid-template-columns: auto 660px;
  @media only screen and (max-width: 1536px) {
    gap: 80px;
    grid-template-columns: 640px 1fr;
  }
  @media (max-width: 1440px) {
    grid-template-columns: 650px 1fr;
  }
  @media (max-width: 1366px) {
    gap: 60px;
    grid-template-columns: 480px 1fr;
  }
  @media (max-width: 1024px) {
    gap: 40px;
    grid-template-columns: 400px 1fr;
  }
  @media (max-width: 768px) {
    gap: 45px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const FigureGroup = styled.div`
  position: relative;
  margin-right: 45px;
  @media only screen and (min-width: 768px) {
    margin-right: 60px;
    max-width: 570px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1024px) {
    margin-right: 25px;
  }
  @media only screen and (min-width: 1280px) {
    margin-right: 105px;
  }
  .graph-2 {
    position: absolute;
    right: -45px;
    bottom: 25px;
    max-width: 175px;
    @media only screen and (min-width: 768px) {
      right: -45px;
      bottom: 25px;
      max-width: none;
    }
    @media only screen and (min-width: 1024px) {
      right: -35px;
      bottom: 25px;
      max-width: 240px;
    }
    @media only screen and (min-width: 1280px) {
      right: -95px;
      bottom: 55px;
    }
    @media only screen and (min-width: 1600px) {
      max-width: none;
    }
  }
`;

export const Content = styled.div`
  text-align: center;
  @media only screen and (min-width: 768px) {
    max-width: 530px;
  }
  @media only screen and (min-width: 1024px) {
    text-align: left;
  }
  .subtitle {
    color: ${themeGet('colors.secondary')};
    font-family: 'Caveat', cursive;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
    @media (max-width: 480px) {
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
    @media (max-width: 1280px) {
      font-size: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 26px;
      line-height: 1.6;
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
