import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  padding: 120px 0;
  @media screen and (max-width: 1440px) {
    padding: 100px 0px;
  }
  @media screen and (max-width: 768px) {
    padding: 70px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 60px 0 50px;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Illustration = styled.figure`
  width: 55%;
  margin: 0 5% 0 0;
  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 40%;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    width: 43%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 48%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 0;
  }
  h2 {
    font-family: Archivo;
    font-weight: 400;
    font-size: 50px;
    line-height: 70px;
    letter-spacing: -1px;
    @media only screen and (min-width: 1024px) and (max-width: 1399px) {
      font-size: 40px;
      line-height: 60px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 30px;
      line-height: 40px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 42px;
      font-weight: 700;
      letter-spacing: 0;
      text-align: center;
    }
    @media only screen and (max-width: 480px) {
      font-size: 20px;
      line-height: 36px;
    }
  }
  p {
    font-style: DM Sans;
    font-size: 16px;
    line-height: 40px;
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 32px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      line-height: 28px;
    }
    @media only screen and (max-width: 768px) {
      line-height: 32px;
      text-align: center;
    }
  }
  .explore {
    color: ${themeGet('colors.linkColor')};
    font-weight: 700;
    font-size: 15px;
    line-height: 42px;
    margin-top: 30px;
    display: inline-flex;
    align-items: center;
    i {
      line-height: 1;
      margin-left: 2px;
      transition: 0.3s ease 0s;
    }
    &:hover i {
      margin-left: 7px;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      margin-top: 15px;
    }
    @media only screen and (max-width: 768px) {
      margin-top: 15px;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 30px;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 25px;
  }
  .button-item {
    display: flex;
    align-items: center;

    .tick {
      display: none !important;

      @media only screen and (max-width: 768px) {
        display: inline-block !important;
        margin-right: 10px;
      }

      @media only screen and (max-width: 370px) {
        align-self: flex-start;
        margin-right: 5px;
      }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 12px;
    }
    &:not(:last-child) {
      margin-bottom: 22px;

      @media only screen and (max-width: 570px) {
        margin-bottom: 10px;
      }
    }
    i {
      margin-right: 8px;
    }
    .btn {
      margin: 0;
      // font-family: Archivo;
      font-size: 22px;
      font-weight: 500;
      line-height: 24px;
      transition: all 0.25s ease-in;
      cursor: pointer;
      padding: 20px 30px;

      &:hover {
        background-color: ${themeGet('colors.primary', '#4200FF')};
        // font-weight: 600;
        border-radius: 5px;
        color: ${themeGet('colors.white', '#4200FF')};
      }

      @media only screen and (max-width: 1024px) {
        padding: 10px 30px;
        font-size: 20px;
      }

      @media only screen and (min-width: 769px) and (max-width: 991px) {
        font-size: 18px;
        letter-spacing: -1px;
      }
      @media only screen and (max-width: 570px) {
        font-size: 16px;
      }
      @media only screen and (max-width: 370px) {
        text-align: left;
        padding-top: 0;
        padding-left: 20px;
      }
    }
  }
`;

export default SectionWrapper;
