import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 320px;
  @media only screen and (max-width: 1536px) {
    padding-top: 160px;
  }
  @media only screen and (max-width: 1440px) {
    padding-top: 140px;
  }
  @media only screen and (max-width: 1366px) {
    padding-top: 170px;
  }
  @media only screen and (max-width: 1280px) {
    padding-top: 160px;
  }
  @media only screen and (max-width: 820px) {
    padding-top: 140px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 110px;
  }
  @media only screen and (max-width: 667px) {
    padding-top: 60px;
  }

  .blockTitle {
    flex: 0 0 50%;
    @media (max-width: 991px) {
      flex: 0 0 100%;
      padding-bottom: 50px;
      max-width: 75%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    @media (max-width: 425px) {
      max-width: 100%;
      text-align: center;
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
      @media (max-width: 480px) {
        font-size: 22px;
        margin-bottom: 6px;
      }
    }
    h2 {
      font-weight: 500;
      font-size: 36px;
      line-height: 1.37;
      letter-spacing: -0.02em;
      margin: 0;
      @media (max-width: 1600px) {
        font-size: 32px;
        line-height: 1.41;
        max-width: 413px;
      }
      @media only screen and (max-width: 1536px) {
        max-width: none;
      }
      @media only screen and (max-width: 991px) {
        font-size: 30px;
      }
      @media (max-width: 768px) {
        max-width: 100%;
      }
      @media only screen and (max-width: 667px) {
        font-size: 22px;
        line-height: 1.5;
      }
    }
    p {
      margin: 0;
      font-weight: normal;
      font-size: 16px;
      line-height: 2;
      margin-top: 30px;
      margin-bottom: 30px;
      @media (max-width: 1600px) {
        font-size: 15px;
        line-height: 1.87;
        max-width: 465px;
      }
      @media (max-width: 991px) {
        max-width: 100%;
      }
    }
    .button {
      display: inline-flex;
      background-color: ${themeGet('colors.primary')};
      color: ${themeGet('colors.black')};
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      font-weight: 500;
      font-size: 16px;
      position: relative;
      padding: 19.5px 29px;
      &:hover {
        background-color: ${themeGet('colors.primaryHover')};
      }
      transition: all .4s ease;
      i {
        margin-left: 10px;
        position: relative;
        top: -1px;
      }
      span {
        position: relative;
        display: flex;
      }
      @media (max-width: 767px) {
        padding: 16px 23px;
        font-size: 13px;
      }
    }
  }
  .postsWrap {
    flex: 0 0 50%;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    @media (max-width: 991px) {
      flex: 0 0 100%;
      max-width: 79%;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 768px) {
      max-width: 100%;
      grid-gap: 20px;
    }
    @media (max-width: 425px) {
      grid-gap: 25px;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
  .post {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    box-shadow: 0px 14px 50px rgba(132, 159, 184, 0.15);
    padding: 50px 36px;
    position: relative;
    overflow: hidden;
    transition-duration: 0.3s;
    transition-property: transform;
    &:hover {
      transform: translateY(-5px);
    }
    @media (max-width: 425px) {
      padding: 30px;
    }
    p {
      margin: 0;
      font-size: 17px;
      line-height: 1;
      color: ${themeGet('colors.white')};
      @media (max-width: 1600px) {
        font-size: 17px;
      }
      @media (max-width: 375px) {
        font-size: 15px;
      }
    }
    @media (min-width: 426px) {
      &:nth-of-type(2) {
        position: relative;
        top: 40px;
      }
      &:nth-of-type(4) {
        position: relative;
        top: 40px;
      }
      &:nth-of-type(3) {
        .postCount {
          align-items: baseline;
          span {
            top: 0;
          }
        }
      }
    }
  }
  .postCount {
    display: flex;
    align-items: flex-start;
    margin-top: 5px;
    margin-bottom: 5px;
    h3 {
      margin: 0;
      font-size: 80px;
      font-family: DM Sans, sans-serif;
      line-height: 1;
      letter-spacing: -0.02em;
      color: ${themeGet('colors.primary')};
      font-weight: 400;
      @media (max-width: 1600px) {
        font-size: 70px;
      }
      @media (max-width: 768px) {
        font-size: 60px;
      }
      @media (max-width: 375px) {
        font-size: 48px;
      }
    }
    span {
      margin: 0;
      font-family: DM Sans, sans-serif;
      font-weight: 500;
      font-size: 40px;
      line-height: 1;
      letter-spacing: -0.02em;
      color: ${themeGet('colors.primary')};
      position: relative;
      top: 5px;
      margin-left: 5px;
      @media (max-width: 375px) {
        font-size: 30px;
      }
    }
  }
`;
export default Section;

export const Grid = styled.div`
  gap: 140px;
  display: grid;
  grid-template-columns: 595px 1fr;
  @media only screen and (max-width: 1366px) {
    gap: 100px;
  }
  @media only screen and (max-width: 1280px) {
    gap: 100px;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 991px) {
    gap: 60px;
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 768px) {
    gap: 0;
    grid-template-columns: 1fr;
  }
`;
