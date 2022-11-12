import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const Wobble_Vertical = keyframes`
  16.65% {
    transform: translateY(8px);
  }
  33.3% {
    transform: translateY(-6px);
  }
  49.95% {
    transform: translateY(4px);
  }
  66.6% {
    transform: translateY(-2px);
  }
  83.25% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0);
  }
`;

const shake = keyframes`
  16%{
      transform:skew(-14deg)
  }
  33%{
      transform:skew(12deg)
  }
  49%{
      transform:skew(-8deg)
  }
  66%{
      transform:skew(6deg)
  }
  83%{
      transform:skew(-4deg)
  }
`;

const Hvr_Ripple_Out = keyframes`
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    --wobbleVertical: ${Wobble_Vertical} 1s ease-in-out;
    --shakeAnim: ${shake} 600ms ease-in-out;
    --HvrRippleOut: ${Hvr_Ripple_Out} 1s ease-in-out;
  }

  body{
    background-color: ${themeGet('colors.black')};
    color: ${themeGet('colors.textColor')};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Noto Serif KR', serif;
    color: ${themeGet('colors.headingColor')};
  }

  input, textarea {
    font-family: 'Inter', sans-serif;
  }

  button {
    font-family: 'Inter', sans-serif;
  }

  section {
    position: relative;
  }

  .sass_app_dark_navbar {
    border-bottom: 1px solid transparent;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    .mainMenuWrapper {
      flex: 1 1 100%;

      @media (max-width: 991px) {
        flex: 0 0 auto;
        margin-left: auto;
      }
    }
    .nav-logo {
      > img {
        @media only screen and (min-width: 990px) and (max-width: 991px) {
          max-width: 90px;
        }
      }
    }
    .main_menu {
      margin-left: 45px;
      @media only screen and (min-width: 990px) and (max-width: 991px) {
        margin-left: 15px;
      }
      li {
        display: inline-flex;
        padding-left: 13px;
        padding-right: 13px;
        @media (max-width: 1024px) {
          padding-left: 8px;
          padding-right: 8px;
        }
        @media only screen and (min-width: 990px) and (max-width: 991px) {
          padding-left: 4px;
          padding-right: 4px;
        }
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: ${themeGet('colors.primary')};
          }
        }
        a {
          color: ${themeGet('colors.white')};
          font-size: 15px;
          line-height: 2.2;
          padding: 5px;
          transition: 0.15s ease-in-out;
          @media only screen and (min-width: 990px) and (max-width: 991px) {
            padding: 3px;
            font-size: 13px;
          }
          &:hover {
            color: ${themeGet('colors.primary')};
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }

    .navbar-buttons {
      margin-left: auto;
      align-items: center;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(2, 1fr);
      @media only screen and (min-width: 990px) and (max-width: 991px) {
        gap: 10px;
        margin-left: 10px;
      }
      button {
        line-height: 19px;
        min-height: 45px;
        padding: 0 20px;
        border-radius: 30px;
        @media only screen and (min-width: 990px) and (max-width: 991px) {
          padding: 0 12px;
          font-size: 13px;
          min-height: 38px;
        }
      }
    }
    .navbar_button_one {
      font-weight: 400;
      background-color: transparent;
      color: ${themeGet('colors.white')};
      padding: 0;
      border: 1px solid ${rgba('#fff', 0.3)};
      .btn-icon {
        margin-right: 9px;
        @media (max-width: 1024px) {
          display: none;
        }
      }
      .btn-text {
        padding: 0;
      }
      @media (max-width: 990px) {
        display: none;
      }
      &:hover {
        color: ${themeGet('colors.primaryHover')};
        border-color: ${themeGet('colors.primaryHover')};
      }
    }
    .navbar_button_two {
      display: inline-flex;
      button {
        font-weight: 600;
        color: ${themeGet('colors.buttonColor')};
        &:hover {
          background-color: ${themeGet('colors.primaryHover')};
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
          background-color: ${themeGet('colors.white')};
        }
      }
    }
  }

  .sticky-nav-active {
    .sass_app_dark_navbar {
      background-color: #1a1a1a;
      border-bottom-color: ${rgba('#fff', 0.2)};
      padding: 15px 0;
    }
    .main-logo {
      opacity: 0;
      visibility: hidden;
    }
    .sticky-logo {
      opacity: 1;
      visibility: visible;
    }
    .main_menu li a {
      color: ${themeGet('colors.white')};
    }
    .main_menu li:hover a,
    .main_menu li.is-current a {
      color: ${themeGet('colors.primary')};
    }
    .reusecore-drawer__handler {
      .hamburgMenu__bar {
        > span {
          background-color: ${themeGet('colors.white')};
        }
      }
    }
    .navbar_button_one {
      background-color: transparent;
    }
  }


  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet('colors.white', '#ffffff')} !important;
    &.alt {
      background-color: ${themeGet('colors.primary', '#10ac84')} !important;
      box-shadow: 0 8px 38px rgba(16, 172, 132, 0.5) !important;
    }
  }
  .reuseModalHolder {
    border: 0 !important;
    background-color: transparent !important;
    &.search-modal,
    &.video-modal {
      background-color: rgba(255, 255, 255, 0.96) !important;
      overflow-y: auto !important;
      .innerRndComponent {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        iframe {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.8) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
    &.video-modal {
      background-color: transparent !important;
    }
    .innerRndComponent {
      padding-right: 0 !important;
    }
  }
  .reuseModalCloseBtn {
    cursor: pointer !important;
  }

  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }

  .reuseModalHolder.login-modal{
    @media (min-width: 768px) {
      top: 0!important;
      left: 0!important;
      max-width: 100%!important;
      max-height: 100%!important;
    }
  }

  .drawer-content-wrapper{
    right: -1px;
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: ${themeGet('colors.primary')};
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: ${themeGet('colors.primary')};
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: ${themeGet('colors.primary')};
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: ${themeGet('colors.primary')};
        transform: rotate(45deg);
        display: block;
      }
    }
  }

  .PhoneInputCountry {
    --PhoneInputCountrySelectArrow-color: ${themeGet('colors.white')};
    --PhoneInputCountrySelectArrow-opacity: 1;
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
`;
