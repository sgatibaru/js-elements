import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  z-index: 0;
  padding-top: 150px;
  @media only screen and (max-width: 1440px) {
    padding-top: 130px;
  }
  @media only screen and (max-width: 1366px) {
    padding-top: 120px;
  }
  @media only screen and (max-width: 1280px) {
    padding-top: 100px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 667px) {
    padding-top: 60px;
  }
`;
export default Section;

export const Grid = styled.div`
  gap: 155px;
  display: grid;
  align-items: center;
  grid-template-columns: 530px 1fr;
  @media only screen and (max-width: 991px) {
    // grid-template-columns: repeat(2, 1fr);
    // gap: 30px;
  }
  @media only screen and (max-width: 991px) {
    // grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    display: flex;
    flex-direction: column-reverse;
  }
  // @media only screen and (max-width: 667px) {
  // }
`;

export const Content = styled.div`
  @media only screen and (max-width: 991px) {
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  @media only screen and (max-width: 425px) {
    max-width: 100%;
  }
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 1.55;
    letter-spacing: -0.2px;
    margin-bottom: 25px;
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
  p {
    font-size: 17px;
    line-height: 2.06;
    margin-bottom: 0;
  }
`;

export const CountryList = styled.div`
  gap: 15px;
  display: grid;
  margin-top: 40px;
  grid-template-columns: 300px min-content;
  @media only screen and (max-width: 991px) {
    justify-content: center;
  }
  @media only screen and (max-width: 820px) {
    grid-template-columns: 210px min-content;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .PhoneInput {
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 0 20px;
    width: 100%;
    @media only screen and (min-width: 769px) {
      max-width: 330px;
    }
  }
  .PhoneInputInput {
    background-color: transparent;
    border: 0;
    min-height: 50px;
    color: ${themeGet('colors.white')};
    padding: 0;
  }
  button {
    font-family: 'Inter', sans-serif;
    color: #19191b;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 0;
    border-radius: 5px;
    padding: 0 35px;
    min-height: 50px;
    cursor: pointer;
    transition: all .4s ease;
  }
`;

export const QrCode = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  @media only screen and (max-width: 991px) {
    justify-content: center;
  }
  @media only screen and (max-width: 667px) {
    margin-top: 25px;
  }
  span {
    font-family: DM Sans;
    font-weight: 700;
    font-size: 17px;
    line-height: 22px;
    margin-left: 20px;
    color: ${themeGet('colors.white')};
  }
`;

export const AppPreview = styled.figure`
  margin: 0;
  @media only screen and (max-width: 991px) {
    max-width: 410px;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 667px) {
    margin-bottom: 25px;
  }
`;
