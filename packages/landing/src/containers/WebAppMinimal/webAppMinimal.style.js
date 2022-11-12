import { themeGet } from '@styled-system/theme-get';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const Fade = keyframes`
  0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;
const FadeUp = keyframes`
  0% {
		opacity: 0;
    transform: scale(.5);
	}
	100% {
		opacity: 1;
    transform: scale(1);
	}
`;

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
    --hvrRippleOut: ${Hvr_Ripple_Out} 1s ease-in-out;
  }

  body{
    font-family: 'Manrope', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Manrope', sans-serif;
  }

  input, textarea {
    font-family: 'Inter', sans-serif;
  }

  button {
    font-family: 'Manrope', sans-serif;
  }

  section {
    position: relative;
  }

  .logo-container {
    position: relative;
    a {
      transition: all 0.3s ease-in-out 0s;
    }
    .sticky-logo {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      visibility: hidden;
    }
  }

  .web_app_minimal_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;

    .container {
      @media only screen and (max-width: 1366px) {
        max-width: 1170px;
      }
    }
    .mainMenuWrapper {
      flex: 1 1 100%;

      @media (max-width: 991px) {
        flex: 0 0 auto;
        margin-left: auto;
      }
    }
    .main_menu {
      margin-left: 45px;
      li {
        display: inline-flex;
        padding-left: 13px;
        padding-right: 13px;
        @media (max-width: 1024px) {
          padding-left: 8px;
          padding-right: 8px;
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
          font-weight: 500;
          padding: 5px;
          transition: 0.15s ease-in-out;
          &:hover {
            color: ${themeGet('colors.primary')};
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }

    .navbar_button button {
      font-size: 15px;
      line-height: 20px;
      font-weight: 700;
    }
    .navbar_button_one {
      margin-left: auto;

      background-color: transparent;
      color: ${themeGet('colors.white')};
      padding: 0;

      &:hover {
        color: ${themeGet('colors.primaryHover')};
      }

      .btn-icon {
        margin-right: 10px;
      }

      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button_two {
      margin-left: 25px;
      button {
        border-radius: 8px;
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
    .web_app_minimal_navbar {
      background-color: ${themeGet('colors.white')};
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
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
      color: ${themeGet('colors.headingColor')};
    }
    .main_menu li:hover a,
    .main_menu li.is-current a {
      color: ${themeGet('colors.primary')};
    }
    .reusecore-drawer__handler {
      .hamburgMenu__bar {
        > span {
          background-color: ${themeGet('colors.headingColor')};
        }
      }
    }
    .navbar_button_one {
      background-color: transparent;
      color: ${themeGet('colors.headingColor')};
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
          max-width: 700px !important;
          max-height: 380px !important;
          width: 100% !important;
          height: 100% !important;
          border-radius: 5px !important;
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

  .reuseModalHolder.search-modal{
    top: 0!important;
    left: 0!important;
    max-width: 100%!important;
    max-height: 100%!important;
    width: 100%;
    height: 100%;
  }

  .reuseModalHolder.login-modal .innerRndComponent{
    overflow-y: auto;
  }

  .drawer-content-wrapper{
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
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
`;
