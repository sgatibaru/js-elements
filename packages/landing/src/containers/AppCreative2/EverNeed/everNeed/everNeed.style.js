import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

export const Grid = styled.div`
  max-width: 1094px;
  margin: 0 auto;
  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    display: grid;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  .icon-box-items {
    @media (min-width: 992px) {
      gap: 25px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      position: relative;
      &:not(:last-child) {
        margin-bottom: 25px;
      }
    }
    &:nth-child(2n+2) {
      @media (min-width: 1300px) {
        left: -66px;
      }
    }
    &:nth-child(3n+3) {
      @media (min-width: 1300px) {
        right: -66px;
      }
    }
  }
  .icon-box-item {
    display: flex;
    align-items: center;
    background-color: ${themeGet('colors.white')};
    box-shadow: 0px 10px 15px rgba(212, 219, 226, 0.18);
    border-radius: 60px;
    padding: 12px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.2px;
    color: #19191B;
    cursor: pointer;
    transition: background-color .4s ease;
    @media (max-width: 1563px) {
      font-size: 16px;
    }
    &:hover {
      background-color: var(--backgroundColor);
    }
  }
`;

export const Figure = styled.figure`
  --figureSize: 55px;
  margin: 0;
  height: var(--figureSize);
  width: var(--figureSize);
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  margin-right: 16px;
  background-color: var(--backgroundColor);
  @media (max-width: 600px) {
    --figureSize: 45px;
  }
  @media (max-width: 1563px) {
    --figureSize: 50px;
  }
  > div {
    margin: auto !important;
  }
`;

export const SectionHeading = styled.div`
  --marginBottom: 65px;
  margin-bottom: var(--marginBottom);
  @media (max-width: 1024px) {
    --marginBottom: 55px;
  }
  @media (max-width: 600px) {
    --marginBottom: 45px;
  }
  @media (max-width: 520px) {
    --marginBottom: 35px;
  }
  text-align: center;
  h2 {
    font-weight: 800;
    line-height: 36px;
    letter-spacing: -0.5px;
    @media (min-width: 1024px) {
      font-size: 26px;
    }
    @media (max-width: 600px) {
      font-size: 24px;
    }
    @media (max-width: 520px) {
      font-size: 18px;
    }
  }
`;