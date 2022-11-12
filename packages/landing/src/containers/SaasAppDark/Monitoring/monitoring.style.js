import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 200px;
  @media only screen and (max-width: 1536px) {
    padding-top: 130px;
  }
  @media only screen and (max-width: 1440px) {
    padding-top: 130px;
  }
  @media only screen and (max-width: 1366px) {
    padding-top: 120px;
  }
  @media only screen and (max-width: 1280px) {
    padding-top: 110px;
  }
  @media only screen and (max-width: 820px) {
    padding-top: 90px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 667px) {
    padding-top: 60px;
  }
`;

export const Grid = styled.div`
  gap: 110px;
  display: grid;
  align-items: center;
  grid-template-columns: 660px 1fr;
  @media only screen and (max-width: 1536px) {
    gap: 80px;
  }
  @media (max-width: 1366px) {
    gap: 60px;
  }
  @media (max-width: 1219px) {
    grid-template-columns: 400px 1fr;
  }
  @media (max-width: 1280px) {
    gap: 60px;
  }
  @media (max-width: 1024px) {
    gap: 40px;
    grid-template-columns: 400px 1fr;
  }
  @media (min-width: 992px) and (max-width: 1023px) {
    gap: 80px;
    grid-template-columns: 370px 1fr;
  }
  @media (max-width: 991px) {
    gap: 45px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const FigureGroup = styled.div`
  position: relative;
  margin-right: 45px;
  @media only screen and (min-width: 768px) {
    margin-right: 60px;
    max-width: 570px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1024px) {
    margin-right: 25px;
  }
  @media only screen and (min-width: 1280px) {
    margin-right: 105px;
  }
  .graph-2 {
    position: absolute;
    right: -45px;
    bottom: 25px;
    max-width: 175px;
    @media only screen and (min-width: 768px) {
      right: -45px;
      bottom: -55px;
      max-width: none;
    }
    @media only screen and (min-width: 1024px) {
      right: -35px;
      bottom: 25px;
      max-width: 240px;
    }
    @media only screen and (min-width: 1280px) {
      right: -95px;
      bottom: -93px;
      max-width: 370px;
    }
    @media only screen and (min-width: 1600px) {
      max-width: none;
    }
  }
`;

export const Content = styled.div`
  text-align: center;
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    max-width: 530px;
  }
  // @media only screen and (min-width: 991px) {
  //   max-width: 750px;
  // }
  @media only screen and (min-width: 992px) {
    text-align: left;
  }
  .subtitle {
    color: ${themeGet('colors.secondary')};
    font-family: 'Caveat', cursive;
    font-weight: 700;
    font-size: 28px;
    color: ${themeGet('colors.secondary')};
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
    font-size: 36px;
    color: ${themeGet('colors.white')};
    line-height: 1.39;
    letter-spacing: -0.02em;
    @media (max-width: 1280px) {
      font-size: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 30px;
      // font-size: 26px;
      line-height: 1.6;
    }
    @media only screen and (max-width: 991px) {
    }
    @media only screen and (max-width: 667px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
  .description {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 2;
    color: ${themeGet('colors.textColor')};
  }
  .explore {
    color: ${themeGet('colors.linkColor')};
    font-weight: 700;
    img {
      line-height: 1;
      transform: translateX(0px);
      transition: 0.3s ease 0s;
      margin-left: 6px;
    }
    &:hover img {
      transform: translateX(3px);
    }
  }
`;

export const FeatureList = styled.div`
  display: grid;
  margin-top: 40px;
  gap: 40px;
  @media only screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .feature {
    display: grid;
    max-width: 475px;
    grid-column-gap: 30px;
    grid-template-columns: 50px 1fr;
    @media only screen and (max-width: 1023px) {
      gap: 20px;
      grid-template-columns: 1fr;
    }
    @media only screen and (max-width: 540px) {
      max-width: 335px;
      margin-left: auto;
      margin-right: auto;
    }
    figure {
      margin: 15px 0 0;
      @media only screen and (max-width: 768px) {
        margin-top: 0;
      }
    }
    &:hover {
      figure {
        animation: var(--shakeAnim);
      }
    }
  }
  .feature-content {
    h4 {
      color: ${themeGet('colors.white')};
      font-family: Manrope;
      font-size: 18px;
      line-height: 25px;
    }
    p {
      color: ${themeGet('colors.textColor')};
      line-height: 1.75;
      margin-bottom: 0;
    }
  }
`;

export default Section;
