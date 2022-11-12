import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 150px;
  padding-bottom: 70px;
  @media (max-width: 1563px) {
    padding-top: 110px;
    padding-bottom: 50px;
  }
  @media (max-width: 1024px) {
    padding-top: 110px;
  }
  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 480px) {
    padding-top: 60px;
    padding-bottom: 40px;
  }
`;

export const Grid = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 991px) {
        flex-wrap: wrap;
        flex-direction: column-reverse;
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
      max-width: 460px;
      flex: 0 0 460px;
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
    margin-left: 85px;
    @media (max-width: 1219px) {
      margin-left: 40px;
    }
    @media (max-width: 991px) {
      max-width: 100%;
      flex: 0 0 100%;
      margin-left: 0;
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
        max-width: 520px;
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
    color: ${themeGet('colors.textColor')};
    font-weight: 500;
    font-size: 16px;
    line-height: 2;
    @media (min-width: 1220px) {
        max-width: 500px;
    }
    @media (max-width: 991px) {
      max-width: 460px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const FeatureGroup = styled.div`
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    gap: 28px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  &:hover {
    figure {
      animation: var(--shakeAnim);
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    > div {
      text-align: center;
    }
  }
  @media only screen and (max-width: 480px) {
    display: block;
    text-align: center;
  }
  figure {
    margin: 0 10px 0 0;
    min-width: 80px;
    @media only screen and (max-width: 768px) {
      margin-bottom: 20px;
      margin-right: 0;
    }
    @media only screen and (max-width: 480px) {
      margin: 0;
      img {
        margin: 0 auto 15px;
      }
    }
  }
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.87;
    margin-bottom: 4px;
  }
  p {
    color: ${themeGet('colors.textColor')};
    font-weight: 500;
    font-size: 15px;
    line-height: 1.73;
    @media only screen and (min-width: 769px) {
        max-width: 350px;
    }
    margin-bottom: 0;
  }
}
`;

export default Section;
