import styled from 'styled-components'

const SectionWrapper = styled.section`
  margin-top: 175px;
  /* padding-bottom: 100px; */

  @media (max-width: 1200px) {
    margin-top: 80px;
  }
  @media (max-width: 768px) {
  }

  .container {
    display: flex;
    /* flex-wrap: wrap; */
    gap: 0 81px;
    justify-content: center;

    @media (max-width: 1200px) {
      align-items: flex-start;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media (min-width: 1566px) {
      max-width: 1430px;
    }
  }
`

export const ContentWrapper = styled.section`
  flex: 0 0 46%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  @media (max-width: 1566px) {
    /* padding-top: 80px; */
  }
  @media (max-width: 1200px) {
    padding-top: 0;
  }
  @media (max-width: 1024px) {
    padding-top: 0px;
    flex: 0 0 100%;
    text-align: center;
    align-items: center;
  }

  .section-title {
    margin-bottom: 15px;

    max-width: 547px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 55px;
    letter-spacing: -0.02em;
    color: #000000;

    @media (max-width: 1566px) {
      font-size: 36px;
      /* max-width: 550px; */
      line-height: 50px;
    }
    @media (max-width: 1200px) {
      font-size: 30px;
      line-height: 40px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
      max-width: 450px;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 480px) {
      font-size: 28px;
      max-width: 360px;
    }
    @media (max-width: 425px) {
      font-size: 26px;
      max-width: 310px;
    }
  }
  .section-description {
    margin-bottom: 0;
    max-width: 515px;
    max-width: 470px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #0f2137;
    @media (max-width: 1566px) {
      font-size: 14px;
      line-height: 28px;
    }
    @media (max-width: 1199px) {
      /* max-width: 400px; */
      max-width: 375px;
    }
    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 480px) {
      font-size: 13px;
      max-width: 350px;
    }
  }
`
export const SectionBodyWrapper = styled.section`
  margin-top: 66px;
  display: flex;
  gap: 50px 72px;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #0f2137;

  @media only screen and (max-width: 1200px) {
    margin-top: 33px;
    font-size: 15px;
    line-height: 18px;
    gap: 50px 42px;
  }

  @media only screen and (max-width: 1024px) {
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    align-items: center;
    gap: 50px 42px;
  }

  .section-body {
    display: flex;
    flex-direction: column;

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #0f2137;

    @media only screen and (max-width: 1024px) {
      font-size: 16px;
      line-height: 20px;
    }
    @media only screen and (max-width: 768px) {
      justify-content: center;
      align-items: center;
    }
    @media only screen and (max-width: 480px) {
      font-size: 14px;
      line-height: 18px;
    }

    & .percentage {
      display: flex;
      align-items: flex-start;

      & .percentage-number {
        font-weight: 400;
        font-size: 80px;
        line-height: 104px;
        letter-spacing: -0.02em;
        color: #000000;

        @media only screen and (max-width: 1200px) {
          font-size: 60px;
        }
        @media only screen and (max-width: 1024px) {
          font-size: 45px;
          line-height: 74px;
        }
        @media only screen and (max-width: 480px) {
          font-size: 45px;
        }
      }
      & .percentage-icon {
        padding-top: 12px;
        padding-left: 4px;
        font-weight: 500;
        font-size: 40px;
        line-height: 52px;
        letter-spacing: -0.02em;
        color: #000000;

        @media only screen and (max-width: 1024px) {
          font-size: 35px;
        }
        @media only screen and (max-width: 480px) {
          font-size: 30px;
        }
      }
    }
  }
`

export const ImageWrapper = styled.section`
  & > div {
  }

  & img {
    object-fit: contain;

    @media (max-width: 1024px) {
      width: 90%;
    }
    @media (max-width: 1024px) {
      width: 70%;
    }
  }

  /* @media (max-width: 1024px) {
    margin: 0 auto;
    margin-left: 25%;
  }

  & > div {
    @media (max-width: 1024px) {
      width: 60%;
      
    }
  }

  .react-reveal {
    background-color: inherit;
  } */
`

export default SectionWrapper
