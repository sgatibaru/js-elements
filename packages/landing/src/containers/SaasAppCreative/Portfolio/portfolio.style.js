import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  background-color: #fff;
  padding-top: 100px;
  padding-bottom: 70px;
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
    padding-top: 60px;
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
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
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
    margin-bottom: 12px;
    @media (max-width: 480px) {
      font-size: 22px;
      margin-bottom: 6px;
    }
  }
`;

export const Grid = styled.div`
  gap: 40px;
  display: grid;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PortfolioItem = styled.div`
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  padding-top: 25px;
  padding-left: 25px;
  @media only screen and (min-width: 1024px) {
    padding-top: 35px;
    padding-left: 40px;
  }
  @media only screen and (min-width: 1280px) {
    padding-top: 50px;
    padding-left: 55px;
  }
  h3 {
    color: ${themeGet('colors.headingColor', '#09131F')};
    font-weight: 700;
    font-size: 18px;
    line-height: 1.38;
    letter-spacing: -0.1px;
    margin-bottom: 10px;
    @media only screen and (min-width: 1024px) {
      font-size: 24px;
    }
  }
  p {
    color: ${themeGet('colors.textColor')};
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 25px;
    margin-right: 25px;
    @media only screen and (min-width: 768px) {
      margin-right: 20px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 16px;
      margin-bottom: 40px;
      line-height: 2;
      margin-right: 0;
    }
  }
`;

export const Figure = styled.figure`
  border-bottom-right-radius: 10px;
  margin: 0;
  overflow: hidden;
  img {
    border-bottom-right-radius: 10px;
    transition: all 0.5s ease-in-out 0s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;
