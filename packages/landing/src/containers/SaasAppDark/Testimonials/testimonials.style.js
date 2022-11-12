import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';
import Slider from 'react-slick';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 160px;
  @media only screen and (max-width: 1536px) {
    padding-top: 130px;
  }
  @media only screen and (max-width: 1440px) {
    padding-top: 110px;
  }
  @media only screen and (max-width: 1366px) {
    padding-top: 120px;
  }
  @media only screen and (max-width: 1280px) {
    padding-top: 100px;
  }
  @media only screen and (max-width: 820px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 667px) {
    padding-top: 60px;
  }
`;
export default Section;

export const SectionHeading = styled.div`
  text-align: center;
  max-width: 755px;
  margin: 0 auto 70px;
  @media only screen and (max-width: 667px) {
    margin-bottom: 30px;
  }
  span {
    color: ${themeGet('colors.secondary')};
    font-family: 'Caveat', cursive;
    font-weight: 700;
    font-size: 28px;
    color: ${themeGet('colors.secondary')};
    line-height: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
    display: block;
    @media (max-width: 480px) {
      font-size: 22px;
      margin-bottom: 6px;
    }
  }
  h2 {
    font-weight: 900;
    font-size: 30px;
    line-height: 43px;
    margin-bottom: 22px;
    @media only screen and (max-width: 820px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 667px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
`;

export const ReactSlick = styled(Slider)`
  .slick-slide > div {
    margin: 0 12px;
  }
  .slick-dots {
    display: flex !important;
    justify-content: center;
    margin-top: 40px;
    li {
      + li {
        margin-left: 7px;
      }
      button {
        background-color: ${rgba('#fff', 0.3)};
        border: 0;
        border-radius: 50px;
        cursor: pointer;
        display: block;
        text-indent: -9999em;
        height: 9px;
        width: 12px;
        transition: all 0.3s ease-in-out 0s;
      }
    }
    .slick-active {
      button {
        background-color: ${themeGet('colors.white')};
        width: 18px;
      }
    }
  }
`;

export const Item = styled.div`
  background-color: #262626;
  border-radius: 15px;
  padding: 40px 35px 45px;
  min-height: 432px;
  display: flex !important;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 30px 25px 35px;
  }
  figure {
    margin: 0 0 35px;
    @media only screen and (max-width: 480px) {
      margin-bottom: 20px;
    }
  }
  blockquote {
    font-size: 18px;
    line-height: 1.94;
    margin: 0 0 30px;
    @media only screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
  h4 {
    margin-bottom: 12px;
    font-family: Inter, sans-serif;
  }
  p {
    line-height: 19px;
    margin-bottom: 0;
  }
`;

export const AuthorInfo = styled.div`
  margin-top: auto;
`;
