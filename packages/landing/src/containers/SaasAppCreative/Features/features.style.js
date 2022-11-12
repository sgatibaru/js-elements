import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  background-color: #fff;
  padding-top: 70px;
  padding-bottom: 100px;
  position: relative;
  z-index: 20;
  @media (max-width: 1366px) {
    padding-bottom: 120px;
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
  text-align: center;
  margin-bottom: 65px;
  h2 {
    font-family: 'Noto Serif KR', serif;
    font-weight: 900;
    font-size: 26px;
    line-height: 37px;
    @media (min-width: 1024px) {
      font-size: 26px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
    }
  }
  p {
    color: ${themeGet('colors.secondary')};
    font-family: 'Caveat', cursive;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
    @media (max-width: 480px) {
      font-size: 22px;
      margin-bottom: 6px;
    }
  }
`;

export const Grid = styled.div`
  gap: 70px 50px;
  display: grid;
  @media only screen and (max-width: 767px) {
    gap: 20px;
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    gap: 40px 30px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FeatureCard = styled.div`
  gap: 28px;
  display: grid;
  @media only screen and (max-width: 1024px) {
    text-align: center;
    img {
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 480px) {
    img {
      max-width: 65px;
    }
  }
  @media only screen and (min-width: 1280px) {
    grid-template-columns: 80px 1fr;
  }
  h4 {
    color: ${themeGet('colors.headingColor', '#09131F')};
    font-weight: 700;
    font-size: 18px;
    line-height: 1.39;
    margin-bottom: 10px;
  }
  p {
    color: ${themeGet('colors.textColor')};
    font-size: 16px;
    line-height: 1.75;
  }
`;
