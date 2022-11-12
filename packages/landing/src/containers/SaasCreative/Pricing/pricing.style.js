import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  background-color: #413c69;
  padding-top: 90px;
  padding-bottom: 120px;
  @media (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
`;

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 70px;
  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
  @media (max-width: 480px) {
    margin-bottom: 45px;
  }
  h2 {
    color: ${themeGet('colors.white')};
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.02em;
    @media (min-width: 1024px) {
      font-size: 26px;
    }
    @media (max-width: 768px) {
      font-size: 28px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const Grid = styled.div`
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 570px);
  justify-content: center;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    gap: 30px;
    grid-template-columns: repeat(1, 450px);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PriceTable = styled.div`
  background-color: ${themeGet('colors.white')};
  border-radius: 8px;
  padding: 50px 35px 70px;
  @media (max-width: 1024px) {
    padding: 40px 35px 60px;
  }
  @media (max-width: 768px) {
    padding: 25px 40px 40px;
  }
  @media (max-width: 480px) {
    padding: 25px 20px 40px;
  }
  header {
    border-bottom: 1px solid ${themeGet('colors.borderColor')};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 40px;
    margin-bottom: 40px;
    @media (max-width: 1024px) {
      margin-bottom: 25px;
      padding-bottom: 25px;
    }
    @media (max-width: 768px) {
      margin-bottom: 20px;
      padding-bottom: 20px;
    }
    @media (max-width: 480px) {
      margin-bottom: 20px;
      padding-bottom: 20px;
    }
  }
  h3 {
    font-weight: 700;
    font-size: 25px;
    line-height: 34px;
    letter-spacing: -0.01em;
    margin-bottom: 0;
    @media (max-width: 768px) {
      font-size: 22px;
    }
    @media (max-width: 480px) {
      font-size: 17px;
    }
  }
  .pro-badge {
    background-color: #2c50ee;
    border-radius: 6px;
    color: ${themeGet('colors.white')};
    font-weight: 800;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 1px;
    min-height: 28px;
    padding: 0 9px;
    display: inline-flex;
    align-items: center;
    margin-left: 7px;
  }
  li {
    font-weight: 500;
    line-height: 26px;
    @media (max-width: 480px) {
      display: flex;
      font-size: 15px;
    }
    i {
      color: #3fdbb1;
      margin-right: 18px;
    }
    + {
      li {
        margin-top: 15px;
        @media (max-width: 480px) {
          margin-top: 10px;
        }
      }
    }
  }
`;

export default Section;
