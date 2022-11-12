import themeGet from '@styled-system/theme-get';
import { rgba } from 'polished';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 60px;
  @media only screen and (max-width: 667px) {
    padding-top: 40px;
  }
`;

export const Title = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: Noto Serif KR;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.417;
    margin-bottom: 0;
    color: ${rgba('#fff', 0.5)};
    @media (max-width: 667px) {
      text-align: center;
      font-size: 22px;
    }
  }
`;

export const Figure = styled.figure`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity .4s ease;
  &:hover {
    opacity: 0.9;
    animation: var(--wobbleVertical);
  }
`;

export const SliderWrapper = styled.div`
  margin-top: 45px;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  .slider {
    display: flex;
    justify-content: space-between;
  }
  figure {
    img {
      opacity: 0.5;
    }
  }
  .slick-slide > div {
    display: flex;
    min-height: 35px;
    align-items: center;
    justify-content: center;
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
      background-color: rgba(255, 255, 255, 0.3);
      border: 0;
      border-radius: 20px;
      height: 10px;
      width: 10px;
      margin: 0 5px;
      padding: 0;
      text-indent: -9999em;
    }
    .slick-active button {
      background-color: ${themeGet('colors.white')};
    }
  }
`;

export default Section;
