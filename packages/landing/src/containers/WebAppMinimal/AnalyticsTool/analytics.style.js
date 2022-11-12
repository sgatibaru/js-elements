import { themeGet } from '@styled-system/theme-get';
import pattern1 from 'common/assets/image/webAppMinimal/banner-pattern-1.png';
import { rgba } from 'polished';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';

const Section = styled(Parallax)`
  background-color: #011336;
  padding-top: 130px;
  padding-bottom: 130px;
  overflow: unset !important;
  &::before {
    background: url(${pattern1?.src}) no-repeat;
    width: 674px;
    top: 0;
    content: '';
    position: absolute;
    height: 811px;
    @media only screen and (max-width: 767px) {
      background-size: 12%;
    }
    @media only screen and (min-width: 768px) {
      background-size: 45%;
    }
    @media only screen and (min-width: 1024px) {
      display: block;
      background-size: 24%;
    }
    @media only screen and (min-width: 1440px) {
      background-size: 60%;
    }
    @media only screen and (min-width: 1600px) {
      background-size: 82%;
    }
  }
  @media (max-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 60px;
  }
  .react-parallax-bgimage {
    z-index: 10;
  }
  .container {
    @media only screen and (max-width: 1366px) {
      max-width: 1170px;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 960px;
    }
  }
  .react-parallax-content {
    z-index: 10;
  }
`;

export const Grid = styled.div`
  gap: 100px;
  display: grid;
  align-items: center;
  grid-template-columns: 600px 1fr;
  @media only screen and (max-width: 1536px) {
    gap: 80px;
    grid-template-columns: 640px 1fr;
  }
  @media (max-width: 1440px) {
    grid-template-columns: 650px 1fr;
  }
  @media (max-width: 1366px) {
    gap: 60px;
  }
  @media (max-width: 1024px) {
    gap: 60px;
    grid-template-columns: 450px 1fr;
  }
  @media (max-width: 991px) {
    display: block;
  }
`;

export const Figure = styled.figure`
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    display: inline-flex;
    @media only screen and (min-width: 768px) {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    @media only screen and (min-width: 1366px) {
      max-width: 550px;
    }
    @media only screen and (min-width: 1440px) {
      margin-right: 0;
    }
  }
`;

export const Content = styled.div`
  text-align: center;
  margin-top: 30px;
  @media only screen and (min-width: 768px) {
    margin-top: 40px;
  }
  @media only screen and (min-width: 1024px) {
    text-align: left;
    margin-top: 0;
  }
  .subtitle {
    color: ${themeGet('colors.secondary')};
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.005em;
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 15px;
      line-height: 2;
    }
  }
  h2 {
    color: ${themeGet('colors.white')};
    font-weight: 800;
    font-size: 40px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    max-width: 480px;
    @media (max-width: 1366px) {
      font-size: 36px;
    }
    @media (max-width: 1280px) {
      font-size: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 28px;
      line-height: 1.5;
    }
    @media (max-width: 991px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 500px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  .description {
    color: ${themeGet('colors.textColorLight')};
    font-weight: 500;
    font-size: 16px;
    line-height: 2;
    max-width: 460px;
    @media (max-width: 991px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
  .explore {
    margin-top: 40px;
    @media only screen and (max-width: 1366px) {
      margin-top: 30px;
    }
    button {
      background-color: transparent;
      border: 1px solid ${rgba('#fffefe', 0.4)};
      border-radius: 7px;
      color: ${themeGet('colors.white')};
      :hover {
        background-color: ${themeGet('colors.primary')};
        border-color: ${themeGet('colors.primary')};
        color: ${themeGet('colors.white')};
      }
    }
    i {
      line-height: 1;
      transform: translateX(0px);
      transition: 0.3s ease 0s;
    }
    &:hover i {
      transform: translateX(3px);
    }
  }
`;

export const Features = styled.ul`
  gap: 15px;
  display: grid;
  margin-top: 30px;
  text-align: left;
  @media only screen and (max-width: 480px) {
    gap: 10px;
  }
  @media only screen and (max-width: 991px) {
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
  li {
    color: ${themeGet('colors.white')};
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    @media only screen and (max-width: 480px) {
      font-size: 15px;
      line-height: 18px;
    }
    i {
      color: #3fdbb1;
      margin-right: 15px;
      @media only screen and (max-width: 480px) {
        margin-right: 6px;
      }
    }
  }
`;

export default Section;
