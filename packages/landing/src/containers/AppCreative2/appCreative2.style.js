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

export const GlobalStyle = createGlobalStyle`
  :root {
    --shakeAnim: ${shake} 600ms ease-in-out;
  }
  body{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    font-family: 'Manrope', sans-serif;
  }

  section {
    position: relative;
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
      .mobile-menu-drawer-bottom {
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .navbar_button  {
          display: flex;
          color: #343d48;
          transition: 0.15s ease-in-out;
          &:hover {
            color: ${themeGet('colors.primary')};
          }
          >img {
            margin-right: 10px;
          }
        }
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex: auto;
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

  .video-modal{
    background: rgba(0,0,0,0.6) !important;
    border: 0 !important;
    animation: ${Fade} .5s ease-out forwards !important;

    .innerRndComponent{
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      animation: ${FadeUp} .7s ease-out forwards !important;
    }
  }
  .reuseModalOverlay,
  .modalCloseBtn{

    animation: ${Fade} .5s ease-out forwards !important;
  }

  .video-modal{
    background: transparent !important;
    border: 0!important;
    .innerRndComponent{
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
  }
  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }

  .button-group {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 20px;
    @media (max-width: 991px) {
      justify-content: center;
    }
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;

  .app_creative_two_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    padding-top: 15px;
    font-size: 16px;
    @media (min-width: 991px) and (max-width: 1023px) {
      font-size: 13px;
    }
    .mainMenuWrapper {
      flex: 1 1 100%;

      @media (max-width: 991px) {
        flex: 0 0 auto;
        margin-left: auto;
      }
    }

    .main-logo {
      margin-left: -9px;
      > img {
        @media (min-width: 991px) and (max-width: 1023px) {
          max-width: 120px;
        }
      }
    }

    .main_menu {
      margin-left: 75px;
      @media (min-width: 991px) and (max-width: 1023px) {
        margin-left: 15px;
        margin-right: 20px;
      }
      li {
        display: inline-flex;
        padding-left: 10px;
        padding-right: 10px;
        @media (max-width: 1024px) {
          padding-left: 8px;
          padding-right: 8px;
        }
        @media (min-width: 991px) and (max-width: 1023px) {
          padding-left: 5px;
          padding-right: 5px;
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
          color: ${themeGet('colors.black')};
          padding: 5px;
          @media (min-width: 991px) and (max-width: 1023px) {
            padding: 3px;
          }
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

    .navbar_button_one {
      margin-left: auto;
      display: flex;
      color: ${themeGet('colors.black')};
      align-items: center;
      transition: 0.15s ease-in-out;

      > img {
        margin-right: 9px;
        @media (min-width: 991px) and (max-width: 1023px) {
          display: none;
        }
      }

      &:hover {
        color: ${themeGet('colors.primary')};
      }

      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button_two {
      margin-left: 25px;
      font-weight: 600;
      padding: 13px 17px;
      background-color: ${themeGet('colors.primary')};
      color: #FFF;
      border-radius: 28px;
      transition: 0.15s ease-in-out;

      @media (min-width: 991px) and (max-width: 1023px) {
        margin-left: 10px;
        padding: 10px 15px;
      }

      &:hover {
        background-color: ${themeGet('colors.primaryHover')};
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
          background-color: ${themeGet('colors.headingColor')};
        }
      }
    }
  }

  .sticky-nav-active {
    .app_creative_two_navbar {
      background-color: ${themeGet('colors.white')};
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
      .main_menu li a {
        color: ${themeGet('colors.headingColor')};
      }
      .main_menu li:hover a,
      .main_menu li.is-current a {
        color: #1089ff;
      }
      .reusecore-drawer__handler {
        .hamburgMenu__bar {
          > span {
            background-color: ${themeGet('colors.headingColor')};
          }
        }
      }
      .navbar_button_one button {
        color: ${themeGet('colors.headingColor')};
      }
      .navbar_button_two button {
      }
    }
  }

  .app_creative_dark_section {
    .faq-title,
    .faq-description {
      color: ${themeGet('colors.white')};
    }
    .cat_content_wrapper {
      &:before {
        background-color: ${themeGet('colors.white')};
      }
    }
  }
  .app_creative_combined_section_wrapper {
    .pricing_policy {
      padding-top: 126px;
      @media (max-width: 1563px) {
        padding-top: 100px;
      }
      @media (max-width: 1024px) {
        padding-top: 53px;
        padding-bottom: 90px;
      }
      @media (max-width: 480px) {
        padding-bottom: 40px;
        padding-top: 40px;
      }
      > div {
        margin-bottom: -394px;
        @media (max-width: 1563px) {
          margin-bottom: -350px;
        }
        @media (max-width: 1367px) {
          margin-bottom: 0px;
        }
        position: relative;
        z-index: 2;
      }
      + .app_creative_section {
        @media (min-width: 1367px) {
          padding-top: 195px;
        }
      }
    }
    .cta_section {
      @media (min-width: 481px) {
        padding-top: 45px;
      }
    }
    .faq_section {
      @media (max-width: 768px) {
        padding-bottom: 25px;
      }
      @media (max-width: 480px) {
        padding-bottom: 0px;
      }
    }
  }
`;
