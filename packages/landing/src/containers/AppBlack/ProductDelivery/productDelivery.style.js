import styled from 'styled-components'

const ProductDeliveryWrapper = styled.section`
  margin-top: 135px;
  padding-bottom: 100px;

  @media (max-width: 1200px) {
    margin-top: 80px;
  }
  @media (max-width: 1024px) {
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
    max-width: 525px;
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
  .section-description {
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

export const PostsWrapper = styled.section`
  max-width: 515px;

  @media (max-width: 1024px) {
    max-width: 430px;
  }
  @media (max-width: 768px) {
    max-width: 410px;
  }

  .postWrap {
    counter-reset: postNumber;
  }
  .post {
    counter-increment: postNumber;
    display: flex;
    align-items: center;
    margin-top: 50px;
    @media (max-width: 1550px) {
      margin-top: 40px;
    }
    @media (max-width: 480px) {
      align-items: flex-start;
    }
    &::before {
      content: counters(postNumber, '.', decimal-leading-zero);
      margin-right: 30px;
      display: block;
      flex-shrink: 0;

      max-width: 61px;
      /* max-height: 75px; */
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 300;
      font-size: 64px;
      line-height: 75px;
      letter-spacing: -0.01em;
      color: #09131f;
      opacity: 0.2;
      @media (max-width: 1566px) {
        font-size: 50px;
        line-height: 65px;
        margin-right: 20px;
        width: 60px;
      }
      @media (max-width: 1200px) {
        width: 50px;
        font-size: 45px;
        line-height: 60px;
      }
      @media (max-width: 1024px) {
        width: 50px;
        font-size: 42px;
        line-height: 56px;
      }
      @media (max-width: 480px) {
        font-size: 34px;
      }
    }

    .post-content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: start;
      .post-title {
        margin: 0;
        margin-bottom: 5px;

        max-width: 200px;
        /* max-height: 30px; */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 30px;
        letter-spacing: -0.01em;
        color: #09131f;

        @media (max-width: 1566px) {
        }
        @media (max-width: 1200px) {
          font-size: 15px;
          line-height: 26px;
        }
        @media (max-width: 1024px) {
          font-size: 14px;
          line-height: 24px;
        }
        @media (max-width: 480px) {
          font-size: 13px;
          line-height: 24px;
        }
      }
      .post-description {
        margin: 0;

        max-width: 418px;
        /* max-height: 56px; */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 28px;
        color: #343d48;

        @media (max-width: 1566px) {
        }
        @media (max-width: 1200px) {
          font-size: 13px;
          line-height: 26px;
        }
        @media (max-width: 1024px) {
          font-size: 14px;
          line-height: 24px;
        }
        @media (max-width: 768px) {
          /* text-align: start;
        padding-left: 20px; */
        }
        @media (max-width: 480px) {
          font-size: 12px;
          line-height: 24px;
        }
      }
    }
  }
`

// export const ImageWrapper = styled.section`
//   flex: 0 0 44%;
//   margin-left: auto;
//   margin-top: -50px;

//   @media (max-width: 950px) {
//     margin: auto 0 auto auto;
//   }

//   @media (max-width: 768px) {
//     flex: 0 0 54%;
//     margin: 50px auto 0 auto;
//   }

//   .image {
//     animation: productDeliveryImage 7s linear infinite;
//     @media (max-width: 768px) {
//       display: block;
//       margin-left: auto;
//       margin-right: auto;
//       max-width: 80%;
//     }
//   }
// `
export const ImageWrapper = styled.section`
  display: none;
  animation: productDeliveryImage 7s linear infinite;
  padding-top: 50px;
  padding-bottom: 50px;
  @keyframes productDeliveryImage {
    0%,
    100% {
      transform: translateY(0px);
    }
    25%,
    75% {
      transform: translateY(15px);
    }
    50% {
      transform: translateY(30px);
    }
  }

  @media (max-width: 1024px) {
    display: inline;
    width: 40%;
    height: auto;
    object-fit: contain;
    margin-top: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
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

export default ProductDeliveryWrapper
