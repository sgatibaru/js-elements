import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Wrapper, Menu } from 'react-aria-menubutton';

const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 80px;
  @media (max-width: 1280px) {
    padding-bottom: 20px;
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
  max-width: 880px;
  margin: 0 auto;
  text-align: center;
  h2 {
    font-weight: 800;
    font-size: 36px;
    line-height: 1.53;
    letter-spacing: -0.5px;
    max-width: 755px;
    margin: 0 auto 30px;
    @media (max-width: 1024px) {
      font-size: 32px;
    }
    @media (max-width: 768px) {
      font-size: 28px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
  p {
    color: ${themeGet('colors.textColor')};
    font-weight: 500;
    font-size: 17px;
    line-height: 2.06;
    max-width: 575px;
    margin: 0 auto 50px;
    @media (min-width: 1025px) and (max-width: 1280px) {
      margin-bottom: 35px;
    }
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
      margin-bottom: 25px;
    }
  }
  button {
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
    letter-spacing: -0.16px;
    min-height: 65px;
    padding: 0 40px;
    @media (min-width: 1025px) and (max-width: 1280px) {
      font-size: 16px;
      min-height: 55px;
      padding: 0 25px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
      min-height: 50px;
      padding: 0 20px;
    }
  }
  span {
    display: block;
    a {
      color: ${themeGet('colors.primary')};
      font-size: 14px;
      font-weight: 700;
      line-height: 2.43;
      margin-top: 25px;
      @media (max-width: 480px) {
        margin-top: 15px;
      }
    }
  }
`;

export const DownloadButton = styled(Wrapper)`
  background-color: ${themeGet('colors.primary')};
  color: ${themeGet('colors.white')};
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.16px;
  min-height: 65px;
  padding: 0 40px;
  position: relative;
  cursor: pointer;
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 16px;
    min-height: 55px;
    padding: 0 25px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    min-height: 50px;
    padding: 0 20px;
  }
  @media (max-width: 480px) {
    padding: 0 30px;
  }
`;

export const DownloadOptions = styled(Menu)`
  background-color: #fff;
  color: ${themeGet('colors.headingColor')};
  box-shadow: 0px 3px 8px 0px rgb(43 83 135 / 8%);
  border-radius: 8px;
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  margin-top: 10px;
  padding: 10px 0;
  li {
    cursor: pointer;
    padding: 10px;
    transition: all 0.25s ease 0s;
    :hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

export default Section;
