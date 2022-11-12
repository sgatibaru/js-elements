import styled from 'styled-components';

const Section = styled.div`
  padding-top: 140px;
  padding-bottom: 200px;
  background-color: #FCF6FA;
  @media (min-width: 1281px) and (max-width: 2000px) {
    position: relative;
    &:before {
      background-image: url("data:image/svg+xml,%3Csvg width='1920' height='122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1918.23 32.511S522.677-1.254 0 122V0h1920' fill='%23fff'/%3E%3C/svg%3E");
      content: "";
      position: absolute;
      left: 0;
      top: -1px;
      width: 100%;
      height: 122px;
      z-index: 1;
      background-repeat: no-repeat;
      background-position: top left;
      background-size: cover;
    }
  }
  @media (max-width: 1563px) {
    padding-top: 100px;
    padding-bottom: 140px;
  }
  @media (max-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 100px;
  }
  @media (max-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 120px;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 100px;
  }
  .testimonial_area {
    padding-top: 150px;
    @media (max-width: 1563px) {
      padding-top: 100px;
    }
    @media (max-width: 1024px) {
      padding-top: 75px;
    }
    @media (max-width: 768px) {
      padding-top: 50px;
    }
  }
`;


export default Section;