import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 70px;
  @media (max-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 50px;
  }
  @media (max-width: 1024px) {
    padding-top: 60px;
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
  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 30px;
    display: grid;
    grid-template-columns: 410px 1fr;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Figure = styled.figure`
  margin: 0 0 0 -5px;
  transform: translateY(60px);
  @media (max-width: 769px) and (max-width: 1024px) {
    transform: translateY(40px);
  }
  @media (max-width: 768px) {
    transform: translateY(0);
    margin: 0;
  }

  img {
    @media only screen and (max-width: 768px) {
      max-width: 70%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Content = styled.div``;

export const SectionHeading = styled.div`
  margin-right: 85px;
  margin-top: 30px;
  @media (max-width: 1280px) {
    margin-right: 0;
  }
  @media (max-width: 1024px) {
    margin: 0;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin: 15px 0 0;
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
    font-weight: 800;
    font-size: 40px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    max-width: 520px;
    @media (max-width: 1280px) {
      font-size: 32px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 28px;
      line-height: 1.5;
    }
    @media (max-width: 768px) {
      font-size: 28px;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 480px) {
      font-size: 23px;
    }
  }
  .description {
    color: ${themeGet('colors.textColor')};
    font-weight: 500;
    font-size: 16px;
    line-height: 2;
    max-width: 500px;
    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
  .explore {
    color: ${themeGet('colors.linkColor')};
    font-weight: 700;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    margin-top: 5px;
    @media only screen and (max-width: 768px) {
      justify-content: center;
      margin-left: -50px;
      width: 100%;
    }
    i {
      line-height: 1;
      transform: translateX(2px);
      transition: 0.3s ease 0s;
    }
    &:hover i {
      transform: translateX(5px);
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      margin-top: 15px;
    }
    @media only screen and (max-width: 768px) {
      margin-top: 15px;
    }
    @media only screen and (max-width: 480px) {
      margin-top: 25px;
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
    margin: 0 20px 0 0;
    min-width: 80px;
    @media only screen and (max-width: 768px) {
      margin-bottom: 20px;
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
    max-width: 350px;
    margin-bottom: 0;
  }
`;

export default Section;
