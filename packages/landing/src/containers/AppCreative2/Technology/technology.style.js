import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;
  @media (max-width: 1280px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media (max-width: 1024px) {
    padding-top: 50px;
  }
  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const Grid = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 991px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const Figure = styled.figure`
  width: 100%;
  margin: 0;
  display: block;
  img {
    @media only screen and (max-width: 768px) {
      max-width: 70%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const FigureWrapper = styled.div`
    @media (min-width: 1220px) {
        max-width: 616px;
        flex: 0 0 616px;
    }
    @media (max-width: 1219px) {
      max-width: 400px;
      flex: 0 0 400px;
    }
    @media (max-width: 991px) {
      max-width: 70%;
      flex: 0 0 100%;
    }
    @media (max-width: 600px) {
      max-width: 100%;
    }
`;

export const Content = styled.div`
    margin-right: 85px;
    @media (max-width: 1280px) {
      margin-right: 40px;
    }
    @media (max-width: 991px) {
      max-width: 100%;
      flex: 0 0 100%;
      margin-right: 0;
      margin-bottom: 30px;
    }
`;

export const SectionHeading = styled.div`
  @media (max-width: 991px) {
    text-align: center;
  }
  .subtitle {
    color: ${themeGet('colors.secondary')};
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.005em;
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 15px;
      line-height: 2;
    }
  }
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 1.25;
    letter-spacing: -0.02em;
    @media (min-width: 1220px) {
        max-width: 534px;
    }
    @media (max-width: 1563px) {
      font-size: 30px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 28px;
      line-height: 1.5;
    }
    @media (max-width: 991px) {
      max-width: 480px;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 768px) {
      font-size: 28px;
    }
    @media (max-width: 600px) {
      line-height: 1.5;
      font-size: 24px;
    }
    @media (max-width: 520px) {
      font-size: 18px;
    }
  }
  .description {
    color: ${themeGet('colors.black')};
    font-size: 16px;
    line-height: 2.2;
    opacity: 0.7;
    @media (min-width: 1220px) {
        max-width: 470px;
    }
    @media (max-width: 991px) {
      max-width: 460px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .explore {
    margin-top: 14px;
    button {
      background-color: transparent;
      border: 2px solid ${rgba('#000000', 0.08)};
      border-radius: 50px;
      padding: 14px 16px;
      color: ${themeGet('colors.black')};
      :hover {
        background-color: ${themeGet('colors.primary')};
        border-color: ${themeGet('colors.primary')};
        color: ${themeGet('colors.white')};
      }
      @media (max-width: 600px) {
        font-size: 15px;
        padding: 9px 12px;
      }
      @media (max-width: 520px) {
        font-size: 13px;
      }
    }
    i {
      line-height: 1;
      transform: translateX(0px);
      transition: 0.3s ease 0s;
    }
    &:hover i {
      transform: translateX(3px);
    }
  }
`;

export default Section;