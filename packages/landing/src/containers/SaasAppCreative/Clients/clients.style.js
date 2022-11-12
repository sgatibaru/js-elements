import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 75px;
  @media only screen and (max-width: 767px) {
    padding-top: 20px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    font-family: Noto Serif KR;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    margin: 0;
    color: ${themeGet('colors.textColorAlt')};
    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 24px;
      line-height: 34px;
    }
    span {
      color: ${themeGet('colors.linkColor')};
    }
    @media (max-width: 480px) {
      text-align: center;
    }
  }
`;

export const Figure = styled.figure`
  margin: 0;
  text-align: center;
  opacity: 0.7;
`;

export const SliderWrapper = styled.div`
  margin-top: 55px;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 767px) {
    margin-top: 45px;
  }
  .slider {
    display: flex;
    justify-content: space-between;
  }
  figure {
    img {
      opacity: 0.7;
    }
  }
  .slick-slide > div {
    display: flex;
    min-height: 35px;
    align-items: center;
    img {
      margin: 0 auto;
    }
  }
  .slick-dots {
    display: flex !important;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    button {
      background-color: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 20px;
      height: 10px;
      width: 10px;
      margin: 0 5px;
      padding: 0;
      text-indent: -9999em;
    }
    .slick-active button {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export default Section;
