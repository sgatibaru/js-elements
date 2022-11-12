import { rgba } from 'polished';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const Section = styled.footer`
  background: linear-gradient(94.45deg, #feeef4 14.71%, #f7f4fa 95.01%);
  .container {
    @media only screen and (max-width: 1366px) {
      max-width: 1170px;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 960px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid ${rgba('#000', 0.1)};
  padding-top: 70px;
  padding-bottom: 70px;
  @media screen and (width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 30px;
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 50px;
  }
  @media screen and (max-width: 480px) {
    gap: 40px 0px;
    grid-template-columns: repeat(2, 50%);
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
    margin-right: 90px;
    width: 285px;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/3;
  }
  img {
    max-width: 126px;
    margin-bottom: 25px;
  }
  p {
    color: ${rgba('#09131F', 0.7)};
    font-family: Inter, sans-serif;
    font-size: 15px;
    line-height: 2.33;
    letter-spacing: -0.002em;
    margin-bottom: 0;
  }
`;

export const FooterWidget = styled.div`
  h4 {
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
      color: ${rgba('#09131F', 0.7)};
      font-size: 15px;
      line-height: 2.5;
      font-weight: 500;
      &:hover {
        color: #02073e;
      }
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
  color: ${rgba('#09131F', 0.7)};
  display: flex;
  align-items: flex-start;
  font-family: Inter, sans-serif;
  font-size: 15px;
  line-height: 28px;
  letter-spacing: -0.002em;
  i {
    color: ${rgba('#000', 0.35)};
    margin-right: 12px;
  }
  .phone-icon {
    margin-top: 6px;
  }
  .phone-number {
    margin-bottom: 0;
  }
`;
