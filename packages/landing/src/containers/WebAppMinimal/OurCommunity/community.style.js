import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding-top: 60px;
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
  max-width: 880px;
  margin: 0 auto;
  text-align: center;
  .slogan {
    color: ${themeGet('colors.secondary')};
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.005em;
    margin-bottom: 1.25rem;
  }
  h2 {
    font-weight: 800;
    font-size: 26px;
    letter-spacing: -0.5px;
    margin-bottom: 1.875rem;
    @media (min-width: 1024px) {
      font-size: 26px;
    }
    @media (max-width: 768px) {
      font-size: 32px;
    }
    @media (max-width: 480px) {
      font-size: 15px;
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
  }
`;

export const Figure = styled.figure`
  margin: 60px 0 0;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  @media (max-width: 480px) {
    margin-top: 35px;
  }
  img {
    margin: 0 auto;
  }
`;

export default Section;
