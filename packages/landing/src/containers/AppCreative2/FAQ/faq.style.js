import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 150px;
  padding-bottom: 70px;
  @media (max-width: 1563px) {
    padding-top: 110px;
    padding-bottom: 50px;
  }
  @media (max-width: 1024px) {
    padding-top: 110px;
  }
  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 480px) {
    padding-top: 60px;
    padding-bottom: 40px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 1220px) {
    grid-column-gap: 140px;
    grid-row-gap: 66px;
  }
  @media (max-width: 1219px) {
    grid-column-gap: 60px;
    grid-row-gap: 40px;
  }
  @media (max-width: 990px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Figure = styled.figure`
  margin: 0;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  background-color: ${themeGet('colors.primary')};
  color: ${themeGet('colors.white')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  margin-right: 21px;
`;

export const FeatureItem = styled.div`
  display: flex;
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.87;
    margin-bottom: 4px;
  }
  p {
    opacity: 0.8;
    line-height: 1.73;
    @media only screen and (min-width: 991px) {
        max-width: 464px;
    }
    margin-bottom: 0;
  }
}
`;

export default Section;
