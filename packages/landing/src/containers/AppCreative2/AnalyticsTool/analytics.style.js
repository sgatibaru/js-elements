import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';
import styled from 'styled-components';

const Section = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;

export const Grid = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    gap: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Figure = styled.figure`
  align-self: center;
  @media (min-width: 1220px) {
    max-width: 668px;
    flex: 0 0 668px;
  }
  @media (max-width: 1219px) {
    max-width: 460px;
    flex: 0 0 460px;
  }
  @media (max-width: 991px) {
    max-width: 70%;
    flex: 0 0 100%;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
  margin: 0;
  img {
    @media (min-width: 567px) and (max-width: 768px) {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Content = styled.div`
  margin-left: 85px;
  margin-top: 30px;
  @media (max-width: 1280px) {
    margin-left: 45px;
  }
  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    margin: 15px 0 0;
    // text-align: center;
  }
  @media (max-width: 991px) {
    max-width: 100%;
    flex: 0 0 100%;
    text-align: center;
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
    color: ${themeGet('colors.black')};
    font-weight: 800;
    font-size: 40px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    max-width: 480px;
    @media (max-width: 1563px) {
      font-size: 30px;
    }
    // @media (max-width: 1280px) {
    //   font-size: 32px;
    // }
    @media (max-width: 1024px) {
      font-size: 28px;
      line-height: 1.5;
    }
    @media (max-width: 991px) {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 600px) {
      max-width: 100%;
      font-size: 24px;
    }
    @media (max-width: 520px) {
      font-size: 18px;
    }
  }
  .description {
    color: ${themeGet('colors.black')};
    opacity: 0.7;
    font-weight: 500;
    font-size: 16px;
    line-height: 2;
    max-width: 460px;
    @media (max-width: 360px) {
      font-size: 14px;
    }
    @media (max-width: 991px) {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 600px) {
      max-width: 100%;
    }
  }
  .explore {
    margin-top: 40px;
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      margin-top: 25px;
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 30px;
    }
    button {
      background-color: transparent;
      border: 2px solid ${rgba('#000000', 0.08)};
      border-radius: 50px;
      padding: 14px 16px;
      color: ${themeGet('colors.black')};
      :hover {
        background-color: ${themeGet('colors.primary')};
        border-color: ${themeGet('colors.primary')};
        color: ${themeGet('colors.white')};
      }
      @media (max-width: 600px) {
        font-size: 15px;
        padding: 9px 12px;
      }
      @media (max-width: 520px) {
        font-size: 13px;
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
  @media only screen and (max-width: 480px) {
    gap: 10px;
  }
  // @media only screen and (max-width: 768px) {
  //   max-width: 350px;
  // }
  text-align: left;
  @media only screen and (max-width: 991px) {
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (max-width: 600px) {
    max-width: 350px;
  }
  li {
    color: ${themeGet('colors.black')};
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
