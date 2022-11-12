import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 120px;
  @media only screen and (max-width: 1440px) {
    padding-top: 120px;
  }
  @media only screen and (max-width: 1280px) {
    padding-top: 100px;
  }
  @media only screen and (max-width: 820px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const SectionHeading = styled.div`
  text-align: center;
  max-width: 755px;
  margin: 0 auto 70px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
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
    @media only screen and (max-width: 991px) {
      font-size: 30px;
    }
    @media only screen and (max-width: 820px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 667px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
`;

export const Grid = styled.div`
  gap: 30px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 415px);
  @media screen and (max-width: 1280px) {
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1024px) {
    gap: 15px;
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 40px 0;
  }
`;

export const Article = styled.article`
  transition: all 0.2s ease 0s;
  :hover {
    transform: translateY(-7px);
  }
  img {
    border-radius: 12px;
  }
  p {
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    margin: 20px 0 0;
  }
  h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.68;
    margin: 8px 0 0;
    font-family: Manrope, sans-serif;
    @media screen and (max-width: 1024px) {
      font-size: 17px;
    }
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  a {
    color: ${themeGet('colors.linkColor')};
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.1px;
    margin-top: 10px;
    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
    i {
      line-height: 1;
      margin-left: 5px;
      transform: translateX(0px);
      transition: 0.3s ease 0s;
    }
    &:hover {
      i {
        transform: translateX(3px);
      }
    }
  }
`;
