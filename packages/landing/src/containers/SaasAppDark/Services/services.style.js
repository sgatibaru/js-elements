import themeGet from '@styled-system/theme-get';
import sprite from 'common/assets/image/saasAppDark/icons/sprite.png';
import { rgba } from 'polished';
import styled from 'styled-components';


const Section = styled.section`
  padding-top: 160px;
  @media only screen and (max-width: 1536px) {
    padding-top: 120px;
  }
  @media only screen and (max-width: 1440px) {
    padding-top: 100px;
  }
  @media only screen and (max-width: 1366px) {
    padding-top: 120px;
  }
  @media only screen and (max-width: 1280px) {
    padding-top: 110px;
  }
  @media only screen and (max-width: 820px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 667px) {
    padding-top: 40px;
  }
`;
export default Section;

export const SectionHeading = styled.div`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 70px;
  h2 {
    font-family: Noto Serif KR;
    font-weight: 700;
    font-size: 30px;
    color: ${themeGet('colors.white')};
    line-height: 1.67;
    @media only screen and (max-width: 667px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
  p {
    font-family: Inter;
    font-size: 17px;
    line-height: 2.24;
    color: ${themeGet('colors.textColor')};
    @media only screen and (max-width: 667px) {
      font-size: 15px;
      line-height: 1.6;
    }
  }
`;

export const Grid = styled.div`
  gap: 0 70px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, max-content);
  @media only screen and (max-width: 1219px) {
    gap: 0 40px;
  }
  @media only screen and (max-width: 991px) {
    grid-template-columns: repeat(3, max-content);
    gap: 35px;
    display: flex;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 820px) {
  }
  @media only screen and (max-width: 667px) {
    gap: 35px;
    grid-template-columns: repeat(2, max-content);
  }
`;

export const Item = styled.div`
  text-align: center;
  cursor: pointer;
  .icon {
    background-color: ${rgba('#15E49E', 0.16)};
    border-radius: 35px;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    transition: all 0.2s ease 0s;
    i {
      background: url(${sprite?.src}) no-repeat 0 0;
      width: 55px;
      height: 55px;
      display: block;
      transition-property: transform;
      transition-duration: 0.3s;
    }
  }
  h4 {
    color: ${themeGet('colors.white')};
    font-family: Manrope;
    font-weight: 600;
    font-size: 17px;
    line-height: 1.35;
    letter-spacing: 0.1px;
    margin-bottom: 0;
    @media only screen and (max-width: 667px) {
      font-size: 15px;
    }
  }
  &:hover {
    .icon {
      background-color: ${themeGet('colors.primary')};
      i {
        background-position: 0 -75px;
        transform: scale(1.05);
      }
    }
  }
  &:nth-child(2) {
    .icon i {
      background-position: -65px 0px;
    }
    &:hover {
      .icon i {
        background-position: -65px -75px;
      }
    }
  }
  &:nth-child(3) {
    .icon i {
      background-position: -130px 0px;
    }
    &:hover {
      .icon i {
        background-position: -130px -75px;
      }
    }
  }
  &:nth-child(4) {
    .icon i {
      background-position: -195px 0px;
    }
    &:hover {
      .icon i {
        background-position: -195px -75px;
      }
    }
  }
  &:nth-child(5) {
    .icon i {
      background-position: -260px 0px;
    }
    &:hover {
      .icon i {
        background-position: -260px -75px;
      }
    }
  }
`;
