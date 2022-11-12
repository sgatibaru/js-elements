import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';

const SecureDashboardArea = styled.section`
  position: relative;
  background-image: linear-gradient(145.65deg, ${themeGet('colors.gradientPrimary')} 6.55%, ${themeGet('colors.gradientSecondary')} 132.26%);
  padding-top: 150px;
  @media (max-width: 1600px) {
    padding-top: 220px;
  }
  @media (max-width: 1199px) {
    padding-top: 100px;
    padding-bottom: 40px;
  }
  @media (max-width: 375px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }

  .sectionImage {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: none;
    animation: var(--DashboardFadeIn) 0.8s linear;
    @media (max-width: 1199px) {
      max-width: 90%;
      position: relative;
      bottom: auto;
      right: auto;
      border-radius: 15px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .postWrap,
  .blockTitle {
    padding-left: 70px;
    @media (max-width: 1600px) {
      padding-left: 40px;
    }
    @media (max-width: 1199px) {
      padding-left: 0;
      padding-top: 50px;
    }
    @media (max-width: 425px) {
      padding-top: 20px;
    }
  }
  .postWrap {
    @media (max-width: 1199px) {
      padding-top: 0;
    }
  }
  .blockTitle {
    @media (max-width: 1199px) {
      max-width: 60%;
      margin-left: auto;
      text-align: center;
      margin-right: auto;
    }
    @media (max-width: 480px) {
      max-width: 100%;
      text-align: left;
    }
    h2 {
      font-weight: 500;
      font-size: 40px;
      line-height: 1.3;
      letter-spacing: -0.02em;
      color: #ffffff;
      margin: 0;
      margin-bottom: 20px;
      @media (max-width: 1600px) {
        font-size: 34px;
        line-height: 1.21;
      }
      @media (max-width: 480px) {
        font-size: 26px;
      }
      @media (max-width: 375px) {
        font-size: 22px;
      }
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 2;
      color: #ffffff;
      margin-bottom: 30px;
      @media (max-width: 1600px) {
        line-height: 1.625;
      }
    }
  }
  .postWrap {
    padding-bottom: 80px;
    @media (max-width: 1600px) {
      padding-bottom: 100px;
    }
    @media (max-width: 1199px) {
      max-width: 60%;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 1024px) {
      padding-bottom: 40px;
    }
    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
  .post {
    display: flex;
    padding: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    cursor: pointer;
    transition: all 500ms ease;
    @media (max-width: 480px) {
      // flex-direction: column;
      padding: 10px;
      border-radius: 10px;
    }
    &.active {
      border: 2px solid rgba(255, 255, 255, 1);
    }
    + .post {
      margin-top: 20px;
    }
    .image {
      margin-right: 20px;
      flex-shrink: 0;
      @media (max-width: 480px) {
        margin-right: 10px;
        // margin-bottom: 20px;
        max-width: 20%;
        flex: 0 0 20%;
      }
      img {
        width: 80px;
        // @media (max-width: 425px) {
        //   margin-left: auto;
        //   margin-right: auto;
        //   display: block;
        // }
      }
    }
    .postContent {
      @media (max-width: 425px) {
        // text-align: center;
      }
      h3 {
        font-weight: bold;
        font-size: 17px;
        line-height: 1.76;
        letter-spacing: -0.01em;
        color: #ffffff;
        margin: 0;
        margin-bottom: 5px;
        @media (max-width: 1600px) {
          font-size: 16px;
        }
      }
      p {
        margin: 0;
        font-weight: normal;
        font-size: 16px;
        line-height: 1.56;
        color: #ffffff;
        @media (max-width: 1600px) {
          font-size: 15px;
        }
      }
    }
  }
`;

export default SecureDashboardArea;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;
export const Col = styled.div`
  flex: 0 0 40%;
  @media (max-width: 1199px) {
    flex: 0 0 100%;
  }
  &.image {
    position: relative;
    flex: 0 0 60%;
    @media (min-width: 1850px) and (max-width: 2500px) {
      position: absolute;
      left: 0;
      bottom: -5px;
    }
    @media (max-width: 1199px) {
      flex: 0 0 100%;
    }
  }
`;
