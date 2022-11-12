import { themeGet } from '@styled-system/theme-get'
import { rgba } from 'polished'
import Slider from 'react-slick'
import styled from 'styled-components'

const Section = styled.section`
  padding-top: 97px;
  @media only screen and (max-width: 1566px) {
  }
  @media only screen and (max-width: 1440px) {
    padding-top: 87px;
  }

  @media only screen and (max-width: 1200px) {
    padding-top: 80px;
  }
  /* @media only screen and (max-width: 820px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 667px) {
    padding-top: 60px;
  } */
`
export default Section

export const SectionHeading = styled.div`
  text-align: center;
  max-width: 755px;
  margin: 0 auto;
  @media only screen and (max-width: 667px) {
    /* margin-bottom: 30px; */
  }

  .section-title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    text-align: center;
    color: #000000;
    @media only screen and (max-width: 1440px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 23px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 20px;
    }
  }
`

export const ButtonGroup = styled.div`
  margin: 43px auto 30px auto;
  padding: 6px;
  max-width: 320px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #f5f6f6;

  button {
    border: 0;
    padding: 15px 23px;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    width: 100%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #000000;
    @media only screen and (max-width: 480px) {
      font-size: 15px;
    }

    &.active {
      color: #000000;
      background-color: #ffffff;
      box-shadow: 0px 12px 50px rgba(0, 0, 0, 0.04);
      border-radius: 10px;
    }
  }
`

export const ReactSlick = styled(Slider)`
  .slick-slide.slick-active.slick-current > div > div {
    @media only screen and (max-width: 649px) {
      background-color: #000;
      background-color: #000000;
      color: white;

      & .reusecore__button {
        background-color: white;
        color: #000000;
      }
      & .link {
        color: white;
      }

      & .icon-black {
        display: none;
      }
      & .icon-white {
        display: flex;
      }
    }
  }

  .slick-slide > div {
    margin: 30px 12px;
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    margin-top: 40px;
    li {
      + li {
        margin-left: 7px;
      }
      button {
        background-color: #aaa;
        border: 0;
        border-radius: 50px;
        cursor: pointer;
        display: block;
        text-indent: -9999em;
        height: 9px;
        width: 12px;
        transition: all 0.3s ease-in-out 0s;
      }
    }
    .slick-active {
      button {
        background-color: #000;
        width: 18px;
      }
    }
  }
`

// import styled from 'styled-components'

// const SectionWrapper = styled.section`
//   padding: 97px 0;
//   @media only screen and (max-width: 1440px) {
//     padding: 77px 0;
//   }
//   @media only screen and (max-width: 768px) {
//     padding: 50px 0 50px;
//   }
//   @media only screen and (max-width: 667px) {
//     padding: 45px 0;
//   }
//   @media only screen and (max-width: 480px) {
//     padding: 25px 0 0;
//   }

//   .container {
//     @media (min-width: 1566px) {
//       max-width: 1430px;
//     }
//   }

//   .section-heading {
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 26px;
//     line-height: 31px;
//     text-align: center;
//     color: #000000;

//     @media only screen and (max-width: 1440px) {
//       font-size: 24px;
//     }
//     @media only screen and (max-width: 768px) {
//       font-size: 23px;
//     }
//     @media only screen and (max-width: 480px) {
//       font-size: 20px;
//     }
//   }
// `

// export const PricingArea = styled.div`
//   padding-top: 51px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   gap: 30px 5px;

//   @media only screen and (max-width: 1566px) {
//     gap: 30px 0;
//   }
//   @media only screen and (max-width: 1024px) {
//     flex-direction: column;
//   }
//   @media only screen and (max-width: 667px) {
//     padding-top: 50px;
//     padding-bottom: 80px;
//     margin-bottom: -40px;
//     overflow-y: hidden;
//   }
// `

export const PricingCard = styled.div`
  /* max-width: 360px; */
  padding: 45px;
  border-radius: 50px;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  transition: all 1s ease;

  @media only screen and (max-width: 1366px) {
    /* max-width: 360px; */
  }
  @media only screen and (max-width: 768px) {
    max-width: initial;
  }
  /* @media only screen and (max-width: 1366px) {
    width: calc(100% / 2 - 20px);
  }
  @media only screen and (max-width: 1366px) {
    max-width: 310px;
  }
  @media only screen and (max-width: 1220px) {
    max-width: 300px;
  }
  @media only screen and (max-width: 1024px) {
    width: 360px;
  }
  @media only screen and (max-width: 667px) {
    width: 360px;
    flex-shrink: 0;
  }
  @media only screen and (max-width: 480px) {
    width: calc(96% - 25px);
  }
  @media only screen and (max-width: 320px) {
    width: 100%;
  } */

  & .price {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    letter-spacing: -0.16px;
  }

  & .title {
    margin-top: 25px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.16px;
  }
  & .description {
    width: 190px;
    margin-top: 13px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    opacity: 0.8;
  }

  & .image {
    margin-top: 45px;
    max-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .icon-white {
    display: none;
  }

  & .reusecore__button {
    margin-top: 54px;
    background: #000000;
    border-radius: 10px;
    transition: all 0.3s ease;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.16px;
    color: #ffffff;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }

  & .link {
    margin-top: 10px;
    padding-right: 7px;
    color: #4f96ff;
    font-weight: 700;
    font-size: 14px;
    line-height: 42px;
    cursor: pointer;

    & .link-text {
      padding-right: 7px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 42px;
    }
  }

  /* &:nth-child(2) {
    background-color: #000000;
    color: white;

    & .reusecore__button {
      background-color: white;
      color: #000000;
    }
    & .link {
      color: white;
    }

    & .icon-black {
      display: none;
    }
    & .icon-white {
      display: flex;
    }
  } */

  /* &:hover {
    background-color: #000000;
    color: white;

    & .reusecore__button {
      background-color: white;
      color: #000000;
    }
    & .link {
      color: white;
    }

    & .icon-black {
      display: none;
    }
    & .icon-white {
      display: flex;
    }
  } */

  &.card-black {
    background-color: #000;
    background-color: #000000;
    color: white;

    & .reusecore__button {
      background-color: white;
      color: #000000;
    }
    & .link {
      color: white;
    }

    & .icon-black {
      display: none;
    }
    & .icon-white {
      display: flex;
    }
  }
`
