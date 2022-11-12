import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const SectionHeader = styled.header`
  max-width: 352px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 102px;

  @media only screen and (max-width: 1440px) {
    margin-bottom: 90px;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 70px;
  }
  @media only screen and (max-width: 667px) {
    margin-bottom: 50px;
  }

  .section-title {
    margin: 0;

    /* width: 340px; */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    text-align: center;
    color: #000000;

    @media only screen and (max-width: 1366px) {
      font-size: 28px;
      letter-spacing: -0.7px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }
`

const FaqSection = styled.section`
  margin-top: 110px;
  /* padding: 110px 0; */
  overflow: hidden;
  @media only screen and (max-width: 1366px) {
    /* padding: 80px 0; */
  }
  @media only screen and (max-width: 667px) {
    /* padding: 55px 0; */
  }

  .reusecore__accordion {
    max-width: 750px;
    margin: 0 auto;

    .accordion__item {
      border-top: 0;
      border-bottom: 1px solid #e5ecf4;
      &:last-child {
        padding-bottom: 0;
      }

      .accordion__header {
        padding: 16px 0;

        > div {
          flex-direction: row-reverse;
          justify-content: flex-start;

          .icon-wrapper {
            margin-top: -15px;
            width: 30px;
            flex-grow: 0;
            flex-shrink: 0;
            margin-left: 0;
            margin-right: 16px;
            color: #000;
            @media only screen and (max-width: 767px) {
              margin-right: 15px;
            }
          }
        }
      }

      .accordion__body {
        padding: 0 0 20px 41px;
      }
    }

    .faq-question {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: -0.5px;
      color: #0f2137;

      @media only screen and (max-width: 667px) {
        font-size: 16px;
        line-height: 28px;
      }
    }

    .faq-answer {
      margin: 0;
      padding-bottom: 34px;
      max-width: 713px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: #000000;
    }
  }
`

export default FaqSection
