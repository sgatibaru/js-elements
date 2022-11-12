import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  background: linear-gradient(94.45deg, #feeef4 14.71%, #f7f4fa 95.01%);
  padding-top: 90px;
  padding-bottom: 90px;
  position: relative;
  @media only screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 60px;
  }
`;
export default Section;

export const Content = styled.div`
  max-width: 765px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
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
    font-weight: 700;
    font-size: 24px;
    line-height: 1.6;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    @media only screen and (min-width: 768px) {
      font-size: 26px;
    }
    @media only screen and (min-width: 1280px) {
      font-size: 36px;
      line-height: 1.39;
    }
  }
  .description {
    color: ${themeGet('colors.textColor')};
    font-weight: 500;
    font-size: 14px;
    line-height: 1.8;
    margin-bottom: 0;
    @media only screen and (min-width: 1024px) {
      max-width: 600px;
      margin: 0 auto;
    }
    @media only screen and (min-width: 1280px) {
      font-size: 17px;
      line-height: 2.06;
      max-width: none;
    }
  }
`;

export const DownloadCenter = styled.div`
  gap: 25px;
  margin-top: 35px;
  align-items: center;
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  figure {
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    img {
      max-width: 120px;
    }
  }
`;
