import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const FooterWrapper = styled.footer`
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 42px;
    padding-bottom: 35px;
    background-color: #f0f2f5;
    font-family: 'Inter';

    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      padding: 30px 0;
      gap: 15px;
    }
    @media (max-width: 768px) {
      padding: 25px 0;
    }
  }
  .leftText {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0 15px;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      gap: 15px;
    }
    span {
      margin: 0;
    }
  }
  .footerText {
    padding-top: 5px;
    display: flex;
    align-items: center;
    /* margin-left: 15px; */

    @media (max-width: 414px) {
      margin-left: 0;
      margin-top: 10px;
    }
    span {
      font-weight: 400;
      font-size: 15px;
      line-height: 25px;
      color: #000000;
      display: block;
      margin-right: 5px;
    }
    a {
      display: block;
      line-height: 1;
      color: #000000;
      border-bottom: 1px solid #000000;
      font-weight: bold;
    }
  }
  .footerMenu {
    display: flex;
    align-items: center;
    @media (max-width: 1199px) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    a {
      color: #0f2137;
      font-size: 15px;
      transition: all 500ms ease;
      display: flex;

      @media (max-width: 306px) {
        font-size: 14.5px;
      }

      &:hover {
        color: #000;
        font-weight: bold;
      }
      + a {
        margin-left: 35px;
      }
    }
  }
  .socialLinks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0 15px;
    cursor: pointer;
    span {
      margin: 0;
      color: #09131f;
      font-size: 15px;
      display: block;
    }
    /* a {
      display: block;
      margin-left: 15px;
    } */
  }
  .logo {
    width: 150px;
  }
`

export default FooterWrapper
