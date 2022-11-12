import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const Section = styled.footer`
  padding-bottom: 60px;
  @media screen and (max-width: 1280px) {
    padding-bottom: 50px;
  }
  @media screen and (max-width: 1024px) {
    padding-bottom: 80px;
  }
  @media screen and (max-width: 480px) {
    padding: 20px 0 20px;
  }
`;

export const Grid = styled.div`
  border-top: 1px solid ${themeGet('colors.borderColor')};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-top: 50px;
  @media screen and (max-width: 768px) {
    gap: 30px 30px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 480px) {
    gap: 25px 30px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FooterWidget = styled.div`
  h4 {
    font-weight: 700;
    font-size: 17px;
    line-height: 1.76;
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
      font-size: 14px;
      line-height: 2.5;
      font-weight: 500;
      &:hover {
        color: #02073e;
      }
    }
  }
`;
