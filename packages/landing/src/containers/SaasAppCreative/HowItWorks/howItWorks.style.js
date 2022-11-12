import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding-top: 75px;
  padding-bottom: 150px;
  @media (max-width: 1024px) {
    padding-top: 50px;
  }
  @media (max-width: 768px) {
    padding-bottom: 70px;
  }
  @media (max-width: 767px) {
    padding-top: 40px;
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

export const SectionHeading = styled.div`
  text-align: center;
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
  gap: 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 100px;
  @media (max-width: 1280px) {
    gap: 18px;
  }
  @media (max-width: 1024px) {
    gap: 20px;
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 290px);
    justify-content: center;
    gap: 50px 40px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 60px;
  }
`;

export const Item = styled.div`
  @media only screen and (max-width: 480px) {
    max-width: 260px;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
  }
  figure {
    margin: 0 0 30px;
    @media (min-width: 769px) and (max-width: 1024px) {
      min-height: auto;
      margin-bottom: 30px;
    }
    @media (max-width: 480px) {
      margin-bottom: 20px;
      min-height: auto;
    }
  }
  img {
    margin: 0 auto;
    @media (max-width: 1024px) {
      max-width: 70px;
    }
  }
  h4 {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    @media (max-width: 1024px) {
      font-size: 17px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
      margin-bottom: 5px;
    }
  }
  p {
    color: ${themeGet('colors.textColor')};
    font-size: 16px;
    line-height: 2;
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 14px;
      line-height: 1.9;
    }
    @media (max-width: 480px) {
      font-size: 15px;
    }
  }
  a {
    color: ${themeGet('colors.linkColor')};
    font-family: Manrope, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.1px;
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 14px;
    }
    img {
      line-height: 1;
      margin-left: 6px;
      transform: translateX(2px);
      transition: 0.3s ease 0s;
    }
    &:hover img {
      transform: translateX(5px);
    }
  }
`;

export default Section;
