import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;

export const Grid = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    gap: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Figure = styled.figure`
  margin: 0 0 0 -5px;
  img {
    @media (max-width: 768px) {
      max-width: 70%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Content = styled.div`
  margin-left: 85px;
  margin-top: 30px;
  @media (max-width: 1280px) {
    margin-left: 45px;
  }
  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    margin: 15px 0 0;
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
    font-weight: 800;
    font-size: 40px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    max-width: 480px;
    @media (max-width: 1280px) {
      font-size: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 28px;
      line-height: 1.5;
    }
    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 500px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  .description {
    color: ${themeGet('colors.textColor')};
    font-weight: 500;
    font-size: 16px;
    line-height: 2;
    max-width: 460px;
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
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
      margin-top: 0;
    }
    @media only screen and (max-width: 768px) {
      margin-top: 15px;
    }
    @media only screen and (max-width: 480px) {
      margin-top: 10px;
    }
  }
`;

export default Section;
