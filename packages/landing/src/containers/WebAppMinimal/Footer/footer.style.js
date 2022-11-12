import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';
import styled from 'styled-components';

export const Section = styled.footer`
  padding-top: 50px;
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
  @media screen and (max-width: 991px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 30px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 480px) {
    gap: 35px 0px;
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
    margin-right: 100px;
    width: 270px;
  }
  @media screen and (max-width: 480px) {
    // grid-column: 1/3;
    width: 100%;
    flex: 0 0 100%;
  }
  img {
    max-width: 126px;
    margin-bottom: 25px;
  }
  p {
    color: ${rgba('#09131F', 0.7)};
    font-family: Inter, sans-serif;
    font-size: 15px;
    line-height: 2;
    letter-spacing: -0.002em;
    margin-bottom: 0;
  }
`;

export const FooterWidget = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
    flex: 0 0 100%;
  }
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
      transition: color .4s ease;
      &:hover {
        // color: #02073e;
        color: ${themeGet('colors.primaryHover')};
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

export const FooterBottom = styled.div`
  border-top: 1px solid ${themeGet('colors.borderColor')};
  color: ${themeGet('colors.headingColor')};
  font-family: Inter, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 45px;
  margin-top: 60px;
  @media screen and (max-width: 1024px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 991px) {
    gap: 25px;
    display: grid;
    text-align: center;
    justify-content: center;
  }
  p {
    margin-bottom: 0;
    @media screen and (max-width: 480px) {
      line-height: 1.8;
    }
  }
`;

export const FooterNav = styled.ul`
  display: flex;
  justify-content: center;
  li {
    + li {
      margin-left: 30px;
      @media screen and (max-width: 480px) {
        margin-left: 20px;
      }
    }
    a {
      color: ${themeGet('colors.black')};
      transition: color .4s ease;
      :hover {
        color: ${themeGet('colors.primary')};
      }
    }
  }
`;

export const SocialLinks = styled.div`
  align-items: center;
  display: flex;
  @media screen and (max-width: 991px) {
    justify-content: center;
  }
  ul {
    display: flex;
    align-items: center;
    li {
      display: inline-flex;
      margin-left: 15px;
      a {
        display: inline-flex;
        img {
          transition: opacity .4s ease;
        }
        &:hover {
          img {
            opacity: .7;
          }
        }
      }
    }
  }
`;
