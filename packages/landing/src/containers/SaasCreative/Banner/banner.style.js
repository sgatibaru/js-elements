import { rgba } from 'polished';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import shape from 'common/assets/image/saasCreative/shape.svg';

const Section = styled.section`
  background-color: #413c69;
  position: relative;
  z-index: 0;
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  ::before {
    background: transparent url(${shape?.src}) no-repeat;
    bottom: 147px;
    height: 232px;
    @media (max-width: 768px) {
      bottom: -30px;
    }
    @media (max-width: 480px) {
      bottom: -80px;
    }
  }
  ::after {
    background-color: #fff;
    bottom: 0;
    height: 150px;
    @media (max-width: 768px) {
      height: 0;
    }
  }
`;

export const BannerContentWrapper = styled.div`
  @media (min-width: 1280px) {
    min-height: 100vh;
  }
`;

export const BannerContent = styled.div`
  padding-top: 210px;
  max-width: 870px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1024px) {
    max-width: 660px;
    padding-top: 170px;
  }
  @media (max-width: 768px) {
    max-width: 550px;
    padding-top: 150px;
  }
  @media (max-width: 480px) {
    padding-top: 100px;
  }
  h2 {
    color: ${themeGet('colors.white')};
    font-weight: 700;
    font-size: 54px;
    line-height: 1.3;
    text-align: center;
    letter-spacing: -1px;
    @media (max-width: 1024px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      font-size: 32px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 2.11;
    color: ${themeGet('colors.textColorLight')};
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 1.6;
    }
  }
`;

export const Subscribe = styled.div`
  display: flex;
  max-width: 540px;
  margin: 28px auto 0;
  @media screen and (max-width: 1366px) {
    max-width: 80%;
  }
  @media only screen and (max-width: 768px) {
    max-width: 80%;
    margin: 30px auto 0;
  }
  @media only screen and (max-width: 480px) {
    max-width: initial;
    display: block;
  }
  .reusecore__input {
    width: 100%;
  }
  .field-wrapper {
    margin-right: 15px;
    @media only screen and (max-width: 480px) {
      margin-right: 0;
    }
    input {
      border-color: #e9edf5;
      border-radius: 8px;
      font-size: 16px;
      min-height: 60px;
      padding: 0 24px;
      &::placeholder {
        color: ${rgba('#02073E', 0.4)};
        opacity: 1; /* Firefox */
      }
      @media only screen and (max-width: 1280px) {
        min-height: 50px;
      }
    }
  }
  button {
    border-radius: 8px;
    white-space: nowrap;
    padding: 0 30px;
    min-height: 60px;
    @media only screen and (max-width: 1200px) {
      min-height: 50px;
    }
    @media only screen and (max-width: 480px) {
      margin-top: 15px;
      min-height: 45px;
      width: 100%;
    }
  }
`;

export const Figure = styled.figure`
  margin: 80px 0 0;
  @media (max-width: 1024px) {
    margin-top: 50px;
  }
`;

export default Section;
