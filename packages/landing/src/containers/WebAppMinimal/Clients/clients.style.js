import { rgba } from 'polished';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  .container {
    @media only screen and (max-width: 1366px) {
      max-width: 1170px;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 960px;
    }
  }
`;

export const Title = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-weight: 500;
    font-size: 17px;
    margin-bottom: 0;
    color: ${rgba('#5B6F82', 0.6)};
    @media (max-width: 480px) {
      text-align: center;
    }
  }
`;

export const Figure = styled.figure`
  margin: 0;
  text-align: center;
  opacity: 0.7;
  transition: all .4s ease;
  &:hover {
    cursor: pointer;
    animation: var(--wobbleVertical);
    opacity: 0.9;
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
