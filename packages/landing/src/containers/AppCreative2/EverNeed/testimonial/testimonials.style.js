import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const TestimonialsArea = styled.section`
  background: ${themeGet('colors.white')};
  box-shadow: 0px 15px 25px rgba(199, 212, 221, 0.25);
  border-radius: 10px;
  position: relative;
  max-width: 1170px;
  margin: auto;
  .glide__slide {
    height: auto;
  }
  .testimonial_card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .testimonial_card_body {
    flex: auto;
    padding: 90px 80px 73px;
    @media (max-width: 1219px) {
      padding: 70px 45px 56px;
    }
    @media (max-width: 520px) {
      padding: 30px 25px 26px;
    }
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      grid-gap: 0px;
    }
    .quoteImage {
      position: absolute;
      top: -56px;
      left: 0;
      @media (max-width: 520px) {
        top: -26px;
        max-width: 60px;
      }
    }
    .testimonial_name {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 6px;
      @media (max-width: 520px) {
        font-size: 16px;
      }
    }
    .testimonial_designation {
      opacity: 0.7;
      display: block;
      @media (max-width: 520px) {
        font-size: 14px;
      }
    }
    .testimonial_logo {
      max-width: 130px;
    }
    .testimonial_name,
    .testimonial_designation {
      @media (max-width: 520px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .testimonials_left_content {
    grid-column: span 4;
    position: relative;
    p {
      font-size: 20px;
      line-height: 210%;
      letter-spacing: -0.6px;
      font-style: italic;
      margin-bottom: 23px;
      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 200%;
      }
      @media (max-width: 520px) {
        font-size: 14px;
      }
    }
  }
  .testimonials_right_content {
    grid-column: span 2;
    text-align: right;
  }
  .testimonial_reviewer_image {
    position: relative;
    img {
      margin-left: auto;
      width: 280px;
      height: 280px;
      @media (max-width: 1219px) {
        width: 250px;
        height: 250px;
      }
      border-radius: 50%;
    }
    display: none;
    @media (min-width: 992px) {
      display: inline-block;
    }
  }
  .rating {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    line-height: 1;
    background-color: ${themeGet('colors.white')};
    box-shadow: 0px 4px 20px rgb(151 172 190 / 15%);
    border-radius: 50px;
    font-size: 22px;
    color: ${themeGet('colors.rating')};
    padding: 14px 26px;
    white-space: nowrap;
    width: auto;
    i {
      &:not(last-child) {
        margin-right: 4px;
      }
    }
    svg {
      height: 1em;
      width: 1em;
    }
  }
  .testimonial_card_footer {
    background-color: #F8F9FA;
    text-align: center;
    padding: 23px 15px;
    flex-shrink: 0;
    a {
      color: #6720DF;
      font-weight: 500;
      font-size: 15px;
      @media (max-width: 520px) {
        font-size: 13px;
      }
      svg {
        margin-left: 9px;
        display: inline-block;
        transform: translateX(2px);
        transition: 0.3s ease 0s;
      }
      &:hover {
        svg {
          transform: translateX(5px);
        }
      }
    }
  }
  .glide__bullets {
    position: absolute;
    line-height: 1;
    display: flex;
    margin-top: 40px;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);

    .glide__bullet {
      background-color: rgba(0,0,0,0.2);
      border: 0;
      border-radius: 50px;
      cursor: pointer;
      display: block;
      text-indent: -9999em;
      height: 9px;
      width: 12px;
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;

      &:not(:last-child) {
        margin-right: 8px;
      }

      &--active {
        background-color: #000000;
        width: 18px;
      }
    }
  }
  .reviewer_content_wrapper {
    .reviewer_content {
      @media (max-width: 520px) {
        > img {
          max-width: 90px;
        }
      }
    }
    .testimonial_reviewer_image {
      display: none;
    }
    @media (max-width: 991px) {
      display: flex;
      grid-gap: 10px;
      flex-wrap: wrap;
      .testimonial_reviewer_image {
        flex-shrink: 0;
        display: block;
        img {
          margin-left: 0;
          width: 75px;
          height: 75px;
        }
      }
      .reviewer_content {
        flex: 0 0 calc(100% - 85px);
        max-width: calc(100% - 85px);
      }
    }
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

export default TestimonialsArea;
