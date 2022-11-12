import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 100px;
  position: relative;
  @media (max-width: 1280px) {
    padding-bottom: 60px;
  }
  @media (max-width: 1024px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
  @media (max-width: 480px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const Content = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  padding-top: 102px;
  @media (max-width: 1280px) {
    padding-top: 60px;
  }
  @media (max-width: 480px) {
    padding-top: 45px;
  }
  &:before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${themeGet('colors.dark')};
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
  }
  h2 {
    color: ${themeGet('colors.white')};
    font-weight: 700;
    font-size: 45px;
    line-height: 1.53;
    letter-spacing: -0.4px;
    max-width: 821px;
    margin: 0 auto 15px;
    @media (max-width: 1563px) {
      font-size: 32px;
    }
    @media (max-width: 768px) {
      font-size: 28px;
    }
    @media (max-width: 600px) {
      margin-bottom: 24px;
      font-size: 24px;
    }
    @media (max-width: 520px) {
      font-size: 18px;
    }
  }
  p {
    color: ${themeGet('colors.white')};
    opacity: 0.7;
    font-size: 20px;
    line-height: 2;
    max-width: 575px;
    margin: 0 auto 41px;
    @media (min-width: 1025px) and (max-width: 1280px) {
      margin-bottom: 35px;
    }
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
    @media (max-width: 1563px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 13px;
      margin-bottom: 25px;
    }
  }
  .call_to_action_info {
    display: block;
    color: ${themeGet('colors.white')};
    font-size: 14px;
    margin-top: 17px;
    opacity: 0.6;
    @media (max-width: 480px) {
      margin-top: 15px;
    }
  }
  .call_to_action_link {
    background: ${themeGet('colors.primary')};
    border-radius: 50px;
    font-weight: 700;
    font-size: 18px;
    color: ${themeGet('colors.white')};
    padding: 22px 30px;
    transition: all .4s ease-in;
    @media (max-width: 1563px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
      padding: 15px 22px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
      padding: 15px;
    }
    &:hover {
      background-color: ${themeGet('colors.primaryHover', '#2563FF')};
    }
  }
`;

export default Section;
