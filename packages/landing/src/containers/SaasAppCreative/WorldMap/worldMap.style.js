import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding-top: 90px;
  padding-bottom: 60px;
  @media (max-width: 1024px) {
    padding-bottom: 50px;
  }
  @media (max-width: 768px) {
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

export const SectionHeading = styled.div`
  text-align: center;
  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    max-width: 530px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 600px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 725px;
  }
  .slogan {
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
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 22px;
    @media only screen and (min-width: 768px) {
      font-size: 26px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 28px;
    }
    @media only screen and (min-width: 1280px) {
      font-size: 36px;
    }
  }
  .description {
    color: ${themeGet('colors.textColor')};
    font-weight: 500;
    font-size: 17px;
    line-height: 2.06;
    margin-bottom: 0;
    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 1.8;
    }
    @media only screen and (min-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const Figure = styled.figure`
  margin: 60px 0 0;
  text-align: center;
  @media (max-width: 1024px) {
    max-width: 740px;
    margin: 60px auto 0;
  }
  @media (max-width: 768px) {
    max-width: 560px;
    margin: 40px auto 0;
  }
  @media (max-width: 480px) {
    margin-top: 35px;
  }
  img {
    margin: 0 auto;
  }
`;

export default Section;
