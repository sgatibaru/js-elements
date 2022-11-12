import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  z-index: 0;
  padding-top: 195px;
  @media only screen and (max-width: 1536px) {
    padding-top: 130px;
  }
  @media only screen and (max-width: 1440px) {
    padding-top: 120px;
  }
  @media only screen and (max-width: 820px) {
    padding-top: 100px;
  }
  @media only screen and (max-width: 667px) {
    padding-top: 70px;
  }
`;
export default Section;

export const SectionHeading = styled.div`
  text-align: center;
  max-width: 755px;
  margin: 0 auto 70px;
  span {
    color: ${themeGet('colors.secondary')};
    font-family: 'Caveat', cursive;
    font-weight: 700;
    font-size: 28px;
    color: ${themeGet('colors.secondary')};
    line-height: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
    display: block;
    @media (max-width: 480px) {
      font-size: 22px;
      margin-bottom: 6px;
    }
  }
  h2 {
    font-weight: 900;
    font-size: 30px;
    line-height: 43px;
    margin-bottom: 22px;
    @media only screen and (max-width: 667px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
  p {
    font-size: 17px;
    line-height: 2.06;
    margin-bottom: 0;
    @media only screen and (max-width: 667px) {
      font-size: 15px;
      line-height: 1.6;
    }
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 1240px;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Figure = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  > div {
  }
  @media (min-width: 768px) {
    max-width: 600px;
  }
  @media (min-width: 1024px) {
    max-width: 720px;
  }
  @media (min-width: 1366px) {
    max-width: 1040px;
  }
  @media (min-width: 1280px) {
    max-width: 9200px;
  }
  @media (min-width: 1440px) {
    max-width: 90%;
  }
  @media (min-width: 1600px) {
    max-width: 100%;
  }
`;

export const PlayButton = styled.button`
  background-color: ${themeGet('colors.primary')};
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  position: absolute;
  height: 95px;
  width: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  @media only screen and (max-width: 991px) {
    height: 70px;
    width: 70px;
    > img {
      max-width: 18px;
    }
  }
  @media only screen and (max-width: 600px) {
    height: 60px;
    width: 60px;
    > img {
      max-width: 15px;
    }
  }
  &:before {
    content: '';
    position: absolute;
    border: ${themeGet('colors.primary')} solid 6px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
  }
  &:hover {
    &:before {
      animation: var(--HvrRippleOut);
      animation-iteration-count: infinite;
    }
  }
`;

export const IntroFeatures = styled.div`
  gap: 80px;
  display: grid;
  margin-top: 60px;
  justify-content: center;
  grid-template-columns: repeat(3, max-content);
  @media only screen and (max-width: 1024px) {
    gap: 50px;
  }
  @media only screen and (max-width: 991px) {
    gap: 25px;
    margin-top: 40px;
    grid-template-columns: repeat(2, max-content);
  }
  @media only screen and (max-width: 667px) {
    gap: 10px;
    grid-template-columns: repeat(1, max-content);
  }
`;

export const FeatureItem = styled.div`
  gap: 0 20px;
  display: grid;
  align-items: center;
  grid-template-columns: max-content 1fr;
  h4 {
    font-family: Manrope;
    font-weight: 700;
    font-size: 17px;
    line-height: 23px;
    margin-bottom: 10px;
  }
  p {
    font-size: 15px;
  }
`;
