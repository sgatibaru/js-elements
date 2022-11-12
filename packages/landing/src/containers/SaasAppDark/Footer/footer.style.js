import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';
import styled from 'styled-components';

export const Section = styled.footer`
  padding-top: 120px;
  @media only screen and (max-width: 1440px) {
    padding-top: 100px;
  }
  @media only screen and (max-width: 1366px) {
    padding-top: 90px;
  }
  @media only screen and (max-width: 820px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const Grid = styled.div`
  display: grid;
  padding: 80px 0;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid ${rgba('#fff', 0.2)};
  @media screen and (max-width: 820px) {
    padding: 50px 0;
  }
  @media screen and (max-width: 1219px) {
    gap: 30px 30px;
    padding: 40px 0;
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0;
    gap: 35px 0px;
    > div {
      width: 100%;
      flex: 0 0 100%;
    }
    // grid-template-columns: repeat(2, 1fr);
  }
`;

export const AboutUs = styled.div`
  @media screen and (min-width: 768px) {
    width: 230px;
  }
  @media screen and (min-width: 1024px) {
    width: 210px;
    margin-right: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
    margin-right: 60px;
  }
  @media screen and (min-width: 1366px) {
    margin-right: 60px;
    width: 250px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 100px;
    width: 270px;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/3;
  }
  img {
    max-width: 126px;
    margin-bottom: 25px;
  }
  p {
    font-family: Inter, sans-serif;
    font-size: 15px;
    line-height: 2;
    letter-spacing: -0.002em;
    margin-bottom: 0;
  }
`;

export const FooterWidget = styled.div`
  h4 {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.38;
    margin: 0 0 25px;
    @media screen and (max-width: 768px) {
      margin-bottom: 15px;
    }
    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
  &:last-child {
    margin-right: 0;
  }
  .widgetListItem {
    a {
      color: ${themeGet('colors.textColor')};
      font-size: 15px;
      line-height: 2.5;
      font-weight: 500;
      &:hover {
        color: ${themeGet('colors.white')};
      }
      transition: all .4s ease;
    }
  }
`;

export const ContactInfo = styled.div`
  @media screen and (max-width: 768px) {
    grid-column: 2/4;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/3;
  }
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.38;
    margin: 0 0 25px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: Inter, sans-serif;
  font-size: 15px;
  line-height: 28px;
  letter-spacing: -0.002em;
  i {
    margin-right: 12px;
  }
  .phone-icon {
    margin-top: 6px;
  }
  .phone-number {
    margin-bottom: 0;
  }
`;
