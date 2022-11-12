import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 130px;
  position: relative;
  z-index: 0;
  &::before {
    background-color: #f1f5f8;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 280px;
    width: 100%;
    z-index: -1;
    @media only screen and (max-width: 768px) {
      height: 250px;
    }
  }
`

export const ContentWrapper = styled.div`
  max-width: 1170px;
  background-color: #000000;
  border-radius: 10px;
  padding-top: 70px;
  padding-bottom: 90px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 55px;
  }
  @media only screen and (max-width: 667px) {
    padding: 30px;
  }
`

export const SubscriptionWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
  padding: 10px;
  .subscription-title1 {
    margin-bottom: 50px;

    max-width: 600px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;

    @media only screen and (max-width: 1200px) {
      font-size: 44px;
      line-height: 48px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }
    @media only screen and (max-width: 480px) {
      max-width: 620px;
      font-size: 24px;
      margin-bottom: 30px;
    }
  }

  .subscription-title2 {
    margin-top: -2rem;
    margin-bottom: 50px;

    max-width: 584px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;

    @media only screen and (max-width: 1200px) {
      font-size: 44px;
      line-height: 48px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }
    @media only screen and (max-width: 480px) {
      margin-top: -1.7rem;
      font-size: 24px;
      margin-bottom: 30px;
    }
  }
`

export const SubscriptionForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px 0;

  @media only screen and (max-width: 667px) {
    gap: 10px 0;
  }
  @media only screen and (max-width: 667px) {
    flex-direction: column;
    gap: 10px 5px;
  }
  .input-field {
    input {
      width: 350px;
      min-height: 70px;
      padding-left: 30px;
      background: #000000;
      border: 1.5px solid #ffffff;
      border-radius: 7px 0px 0px 7px;

      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: #ffffff;
      opacity: 0.7;

      ::placeholder {
        color: #ffffff;
      }

      @media only screen and (max-width: 667px) {
        border-radius: 7px;
      }
      @media only screen and (max-width: 465px) {
        padding-left: 10px;
        width: 250px;
      }
      @media only screen and (max-width: 360px) {
        width: 200px;
      }
    }
  }
  .subscription-button {
    padding: 0 30px;
    min-width: 163px;
    min-height: 70px;
    background: #ffffff;
    border: 1.5px solid #ffffff;
    border-radius: 0px 7px 7px 0px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    color: #000000;

    @media only screen and (max-width: 667px) {
      border-radius: 7px;
      min-height: 50px;
    }

    @media only screen and (max-width: 480px) {
      border-radius: 10px;
      margin-top: 10px;
      min-width: 123px;
      min-height: 50px;
    }
  }
`

export const Features = styled.ul`
  padding-left: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px 20px;
  margin: 40px 0 0 0;
  @media only screen and (max-width: 480px) {
    margin-top: 30px;
    padding-left: 5px;
  }
  li {
    display: flex;
    align-items: center;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;

    &:last-child {
      margin-right: 0;
    }
    i {
      display: inline-flex !important;
      margin-right: 8px;
      color: white;
    }
    @media only screen and (max-width: 480px) {
      line-height: 1.8;
    }
  }
`
