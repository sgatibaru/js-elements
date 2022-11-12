import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 150px 0;
  background: linear-gradient(180deg, rgba(230, 249, 255, 0) 0%, rgba(230, 249, 255, 0.8) 100%);
  @media only screen and (max-width: 1366px) {
    padding: 150px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
`;

export const ButtonGroup = styled.div`
  text-align: center;
  --switchHeight: 66px;
  --switchWidth: 72px;
  font-size: 17px;
  color: #696871;
  font-weight: 500;
  .button_groups_wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
  }
  .button_groups_outer_wrapper {
    grid-gap: 17px;
    display: inline-flex;
    align-items: center;
  }
  .switch_outer {
    width: var(--switchWidth);
    height: calc(var(--switchHeight) / 2);
    border-radius: 450px;
    border-width: 6px;
    border-style: solid;
    border-color: #fff;
    transition-duration: 0.4s;
    transition-property: background-color,box-shadow;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    background-color: #E9F0F2;
    border-color: rgba(255,255,255,0);
    // pointer-events: none;
    // user-select: none;
  }
  .switch_inner {
    width: calc(var(--switchHeight) / 2 - 12px);
    height: calc(var(--switchHeight) / 2 - 12px);
    border-radius: 50%;
    pointer-events: none;
    top: 0px;
    left: 0px;
    position: absolute;
    background-color: #fff;
    transition-timing-function: cubic-bezier(1,0,0,1);
    transition-duration: 0.4s;
    transition-property: left,background-color;
  }
  .promotion_alert_box {
    order: 3;
    background-color: ${themeGet('colors.danger')};
    color: ${themeGet('colors.white')};
    border-radius: 5px;
    padding: 6px 9px;
    font-size: 13px;
    font-weight: 600;
  }
  .switch_button {
    cursor: pointer;
    position: relative;
    padding-right: 17px;
    input[type="radio"] {
      opacity: 0;
      // display: none;
      position: absolute;
      left: calc(100% - 2px);
      z-index: 1;
      height: 100%;
      top: -7px;
      width: calc(var(--switchWidth) / 2);
      height: calc(var(--switchHeight) / 2);
      margin: 0;
      padding: 0;
      border: 0;
      cursor: pointer;
    }
    + .switch_button {
      order: 2;
      padding-right: 0;
      padding-left: 17px;
      input[type="radio"] {
        left: auto;
        right: calc(100% - 2px);
      }
    }
    &.checked {
      span {
        color: ${themeGet('colors.primary')};
      }
      + .switch_outer {
        background-color: ${themeGet('colors.primary')};
        .switch_inner {
          left: calc(var(--switchHeight) / 2 + 5px);
        }
      }
    }
  }
`;

export const PricingArea = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding-top: 90px;
  @media only screen and (max-width: 667px) {
    overflow: hidden;
    width: 100%;
    padding-top: 60px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 40px;
  @media only screen and (max-width: 1366px) {
    grid-gap: 30px;
  }
  @media only screen and (max-width: 991px) {
    grid-gap: 20px;
  }
  @media only screen and (max-width: 667px) {
    overflow-x: scroll;
    overflow-y: hidden;
    grid-gap: 15px;
    padding-bottom: 30px;
  }
  @media only screen and (max-width: 480px) {
    grid-gap: 10px;
  }
`;

export const PricingCard = styled.div`
  width: calc(100% / 2);
  max-width: 565px;
  border-radius: 10px;
  @media only screen and (min-width: 668px) {
    box-shadow: ${themeGet('colors.pricingShadow')};
  }
  background-color: ${themeGet('colors.white')};
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 1366px) {
    width: calc(100% / 2);
  }
  @media only screen and (max-width: 991px) {
    width: calc(100% / 2);
  }
  @media only screen and (max-width: 667px) {
    width: 80%;
    flex-shrink: 0;
  }
  @media only screen and (max-width: 480px) {
    width: 96%;
  }
  @media only screen and (max-width: 320px) {
    width: 100%;
  }

  .card-header {
    text-align: center;
    margin-bottom: 46px;
    @media only screen and (max-width: 480px) {
      padding: 15px 10px 10px;
      margin-bottom: 25px;
    }
    h3 {
      color: ${themeGet('colors.primary', '#4780ED')};
      letter-spacing: -0.500211px;
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 16px;
    }
    p {
      letter-spacing: -0.2px;
      color: #19191B;
      opacity: 0.6;
      font-size: 18px;
    }
    .price {
      color: #19191B;
      font-weight: 500;
      @media (min-width: 1564px) {
        font-size: 80px;
      }
      @media (max-width: 1563px) {
        font-size: 50px;
      }
      @media (max-width: 1219px) {
        font-size: 40px;
      }
      @media (max-width: 991px) {
        font-size: 30px;
      }
      line-height: 1;
      margin-bottom: 10px;
      .symbol,
      .state {
        font-size: 30px;
      }
    }
  }

  .card-body {
    @media (min-width: 1220px) {
      padding: 34px 95px;
    }
    @media (max-width: 1219px) {
      padding: 30px;
    }
    @media (max-width: 991px) {
      padding: 20px;
    }
    .feature-list {
      li {
        color: #19191B;
        font-weight: 500;
        @media (min-width: 1564px) {
          font-size: 18px;
        }
        @media (max-width: 1563px) {
          font-size: 14px;
        }
        letter-spacing: -0.2px;
        &:not(:last-child) {
          margin-bottom: 21px;
        }
        i {
          color: ${themeGet('colors.primary', '#2563FF')};
          margin-right: 12px;
          @media (min-width: 992px) {
            width: 30px;
            height: 30px;
            line-height: 25px;
          }
          @media (max-width: 991px) {
            width: 25px;
            height: 25px;
            line-height: 20px;
          }
          border-radius: 50%;
          text-align: center;
          vertical-align: middle;
          position: relative;
          &:before {
            content: "";
            background-color: ${themeGet('colors.primary', '#2563FF')};
            opacity: .15;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            position: absolute;
            border-radius: inherit;
          }
          svg {
            width: 13px;
            height: auto;
          }
        }
      }
    }
  }

  .card-footer {
    .card_button {
      text-align: center;
      background-color: ${themeGet('colors.primary', '#2563FF')};
      display: block;
      text-align: center;
      color: ${themeGet('colors.white', '#FFF')};
      font-weight: 600;
      font-size: 18px;
      transition: all .4s ease-in;
      @media (min-width: 1564px) {
        padding: 25px 30px;
      }
      @media (max-width: 1563px) {
        padding: 20px 25px;
      }
      @media (max-width: 991px) {
        font-size: 16px;
        padding: 15px;
      }
      &:hover {
        background-color: ${themeGet('colors.primaryHover', '#2563FF')};
      }
    }
  }
`;

export const SectionHeader = styled.header`
  text-align: center;
  max-width: 440px;
  margin: 0 auto;
  margin-bottom: 34px;
  h2 {
    font-weight: 800;
    line-height: 36px;
    letter-spacing: -0.5px;
    @media (min-width: 1024px) {
      font-size: 26px;
    }
    @media (max-width: 600px) {
      font-size: 24px;
    }
    @media (max-width: 520px) {
      font-size: 18px;
    }
  }
  p {
    opacity: 0.7;
    line-height: 2.125;
    margin-bottom: 0;
  }
`;

export default SectionWrapper;
