import { themeGet } from '@styled-system/theme-get';
import pattern1 from 'common/assets/image/webAppMinimal/pricing-pattern.png';
import { rgba } from 'polished';
import { Parallax } from 'react-parallax';
import styled, { keyframes } from 'styled-components';

export const Section = styled(Parallax)`
  background-color: #011336;
  padding-top: 70px;
  padding-bottom: 130px;
  position: relative;
  z-index: 0;
  @media only screen and (min-width: 768px) {
    &::after {
      background: url(${pattern1?.src}) no-repeat;
      bottom: 0;
      right: 0;
      content: '';
      content: '';
      position: absolute;
      width: 442px;
      height: 536px;
      z-index: -1;
      background-size: 26%;
      background-position: bottom right;
      @media only screen and (min-width: 1024px) {
        background-size: 40%;
        background-position: bottom right;
      }
      @media only screen and (min-width: 1440px) {
        background-size: 55%;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    padding-top: 50px;
    padding-bottom: 110px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 70px;
  }
  @media screen and (max-width: 480px) {
    padding-bottom: 60px;
    padding-top: 40px;
  }
  .container {
    @media only screen and (max-width: 1366px) {
      max-width: 1170px;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 960px;
    }
  }
`;

export const SectionHeading = styled.div`
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 25px;
  h2 {
    color: ${themeGet('colors.white')};
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
    letter-spacing: -0.2px;
    @media screen and (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  button {
    background-color: transparent;
    border: 0;
    color: ${themeGet('colors.textColorLight')};
    cursor: pointer;
    padding: 0;
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }
  .switcher {
    background-color: #3fdbb1;
    border-radius: 16.5px;
    cursor: pointer;
    margin: 0 10px;
    height: 30px;
    width: 50px;
    position: relative;
  }
  .switcher-button {
    background-color: #fff;
    border-radius: 50%;
    height: 23px;
    width: 23px;
    position: absolute;
    top: 50%;
    transform: translate(3px, -50%);
    transition: all 0.3s ease-in-out 0s;
    &.right {
      transform: translate(24px, -50%);
    }
  }
`;

export const Grid = styled.div`
  gap: 35px;
  display: grid;
  grid-template-columns: repeat(3, 360px);
  justify-content: center;
  @media screen and (max-width: 1024px) {
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const fadeIn3 = keyframes`
  from {
    transform: translateY(75%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const PriceColumn = styled.div`
  background-color: ${rgba('#fff', 0.06)};
  color: ${themeGet('colors.white')};
  box-shadow: 0px 25px 70px rgba(64, 106, 157, 0.06);
  border-radius: 30px;
  padding: 45px 85px;
  text-align: center;
  &.pt-1 {
    animation: 1s ${fadeIn} ease-out;
  }
  &.pt-2 {
    animation: 1s ${fadeIn2} ease-out;
  }
  &.pt-3 {
    animation: 1s ${fadeIn3} ease-out;
  }
  @media (max-width: 1024px) {
    padding: 30px;
  }
  @media (max-width: 768px) {
    padding: 25px 14px;
  }
  @media (max-width: 480px) {
    padding: 35px 45px;
  }
  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.16px;
    margin-bottom: 25px;
    @media (min-width: 567px) and (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 15px;
    }
  }
  h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 10px;
  }
  p {
    color: ${themeGet('colors.textColorLight')};
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    line-height: 1.67;
  }
  figure {
    margin: 40px 0 28px;
    min-height: 101px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      min-height: auto;
      margin-top: 30px;
      img {
        max-height: 60px;
      }
    }
  }
  button {
    border-radius: 10px;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: -0.16px;
    @media (min-width: 567px) and (max-width: 768px) {
      font-size: 14px;
      padding: 10px;
      min-height: 40px;
    }
    @media (max-width: 480px) {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    &:hover {
      background-color: ${themeGet('colors.primaryHover')};
    }
  }
  a {
    color: ${themeGet('colors.textColorLight')};
    font-size: 14px;
    line-height: 42px;
    font-weight: 700;
    margin-top: 15px;
    display: inline-flex;
    transition: color .4s ease;
    i {
      transition: transform .4s ease;
    }
    &:hover {
      i {
        transform: translateX(2px);
      }
      color: ${themeGet('colors.primaryHover')};
    }
  }
  &.active {
    background-color: ${themeGet('colors.white')};
    h2,
    h5 {
      color: ${themeGet('colors.headingColor')};
    }
    p,
    a {
      color: ${themeGet('colors.headingColor')};
    }
    a {
      &:hover {
        color: ${themeGet('colors.primaryHover')};
      }
    }
  }
`;
