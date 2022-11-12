import styled from 'styled-components';
import { rgba } from 'polished';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  background-color: #19202c;
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 1024px) {
    padding-bottom: 70px;
  }
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media (max-width: 480px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const SectionHeading = styled.div`
  text-align: center;
  h2 {
    color: ${themeGet('colors.white')};
    font-weight: 800;
    line-height: 36px;
    letter-spacing: -0.5px;
    @media (min-width: 1024px) {
      font-size: 26px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  p {
    color: ${themeGet('colors.textColorLight')};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 80px;
  @media (max-width: 768px) {
    margin-top: 50px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    margin-top: 50px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  color: ${themeGet('colors.white')};
  border-radius: 6px;
  padding: 60px;
  text-align: center;
  transition: all 0.3s ease-in-out 0s;
  @media (max-width: 1024px) {
    padding: 28px;
  }
  @media (max-width: 768px) {
    padding: 40px 30px 30px;
  }
  @media (max-width: 480px) {
    padding: 30px;
  }
  :hover {
    background-color: ${rgba('#fff', 0.05)};
  }
  figure {
    margin: 0 0 30px;
    img {
      margin: 0 auto;
      @media (min-width: 769px) and (max-width: 1024px) {
        max-width: 75px;
      }
    }
  }
  p {
    color: ${themeGet('colors.textColorLight')};
    line-height: 1.75;
    max-width: 260px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Section;
