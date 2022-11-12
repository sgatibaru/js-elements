import styled from 'styled-components'

const ServiceWrapper = styled.section`
  margin-top: 135px;
  /* padding-bottom: 100px; */

  @media (max-width: 1200px) {
    margin-top: 80px;
  }
  @media (max-width: 768px) {
    padding-bottom: 0px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1200px) {
      align-items: center;
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
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  @media (max-width: 1566px) {
    padding-top: 80px;
  }
  @media (max-width: 1200px) {
    padding-top: 40px;
  }
  @media (max-width: 1024px) {
    padding-top: 0px;
    flex: 0 0 100%;
    text-align: center;
    align-items: center;
  }

  .section-title {
    margin-bottom: 15px;
    max-width: 515px;
    max-height: 111px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 55px;
    letter-spacing: -0.02em;
    color: #0f2137;

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

  .paragraph {
    margin-bottom: 0;
    max-width: 515px;
    max-height: 64px;
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
      max-width: 400px;
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

export const ServiceItemsWrapper = styled.section`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 560px;
  /* gap: 40px 30px; */

  @media (max-width: 1566px) {
    margin-top: 30px;
  }
  @media (max-width: 1200px) {
    margin-top: 25px;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }

  .service-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 208px;

    @media (max-width: 1566px) {
      width: 160px;
      height: 165px;
    }
    @media (max-width: 1440px) {
      width: 130px;
    }
    @media (max-width: 1200px) {
      width: 130px;
    }
    @media (max-width: 1024px) {
      width: 150px;
      height: 145px;
    }
    @media (max-width: 768px) {
      width: 150px;
    }
    @media (max-width: 667px) {
      width: 130px;
      /* height: 180px; */
    }
    @media (max-width: 480px) {
      width: 120px;
      height: 130px;
    }

    & .service-item-icon-holder {
      background-color: rgba(0, 0, 0, 0.06);
      width: 120px;
      height: 120px;
      /* border-radius: 40px; */
      border-radius: 31%;

      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 1566px) {
        width: 90px;
        height: 90px;
      }
      @media (max-width: 1200px) {
        width: 80px;
        height: 80px;
      }
      @media (max-width: 1024px) {
        width: 70px;
        height: 70px;
      }
      @media (max-width: 768px) {
        width: 80px;
        height: 80px;
      }
      @media (max-width: 480px) {
        width: 50px;
        height: 50px;
      }

      & .service-item-icon {
        @media (max-width: 1566px) {
          width: 55%;
        }
        @media (max-width: 1199px) {
          width: 60%;
        }
        @media (max-width: 1024px) {
          width: 50%;
        }
        @media (max-width: 667px) {
          width: 40%;
        }
      }
    }

    & .service-item-title {
      margin-top: 20px;
      margin-bottom: 0;

      /* max-width: 137px; */
      max-height: 19px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #0f2137;

      @media (max-width: 1550px) {
        font-size: 14px;
      }
      @media (max-width: 1199px) {
        max-width: 400px;
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
  }
`

export const ImageWrapper = styled.section`
  display: none;
  @media (max-width: 1024px) {
    display: inline;
    width: 40%;
    height: auto;
    object-fit: contain;
    margin-top: 50px;
  }
  @media (max-width: 700px) {
    width: 60%;
    height: auto;
    object-fit: contain;
  }

  .react-reveal {
    background-color: inherit;
  }
`

export default ServiceWrapper
