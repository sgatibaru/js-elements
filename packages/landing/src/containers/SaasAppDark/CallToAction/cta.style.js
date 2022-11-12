import { themeGet } from '@styled-system/theme-get';
import bg from 'common/assets/image/saasAppDark/cta-bg-1.png';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  z-index: 0;
  padding-top: 150px;
  @media only screen and (max-width: 1536px) {
    padding-top: 130px;
  }
  @media only screen and (max-width: 1366px) {
    padding-top: 120px;
  }
  @media only screen and (max-width: 1280px) {
    padding-top: 100px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 70px;
  }
  @media only screen and (max-width: 667px) {
    padding-top: 60px;
  }
`;
export default Section;

export const BGImage = styled.div`
  @media only screen and (min-width: 1025px) {
    background: url(${bg?.src}) no-repeat scroll center center / cover;
  }
  @media only screen and (min-width: 1280px) {
    padding: 133px 0;
  }
  @media only screen and (max-width: 1600px) {
    padding: 125px 0;
  }
  @media only screen and (max-width: 1440px) {
    padding: 75px 0;
  }
  // @media only screen and (max-width: 1024px) {
  //   background-size: contain;
  // }
`;

export const SectionHeading = styled.div`
  text-align: center;
  max-width: 710px;
  margin: 0 auto;
  @media only screen and (max-width: 767px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  .subtitle {
    color: ${themeGet('colors.secondary')};
    font-family: 'Caveat', cursive;
    font-weight: 700;
    font-size: 28px;
    color: ${themeGet('colors.secondary')};
    line-height: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
    display: block;
    @media only screen and (max-width: 768px) {
      margin-bottom: 5px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
      margin-bottom: 6px;
    }
  }
  h2 {
    font-size: 38px;
    font-weight: 900;
    line-height: 55px;
    margin-bottom: 22px;
    @media only screen and (max-width: 991px) {
      font-size: 30px;
    }
    @media only screen and (max-width: 820px) {
      font-size: 28px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 667px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
  p {
    font-size: 17px;
    line-height: 2.06;
    margin: 0 auto;
    max-width: 650px;
    @media only screen and (max-width: 667px) {
      font-size: 15px;
      line-height: 1.6;
    }
  }
  button {
    border-radius: 50px;
    margin-top: 40px;
    font-weight: 500;
    padding: 25px 27px;
    color: ${themeGet('colors.black')};
    .btn-icon {
      margin-left: 4px;
    }
    @media (max-width: 1023px) {
      padding: 20px 22px;
    }
    @media (max-width: 767px) {
      padding: 17px 18px;
      font-size: 13px;
    }
    &:hover {
      background-color: ${themeGet('colors.primaryHover')};
    }
  }
`;
