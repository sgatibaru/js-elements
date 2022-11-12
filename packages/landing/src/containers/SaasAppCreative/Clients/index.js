import React, { Fragment } from 'react';
import Slider from 'react-slick';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Section, {
  SectionHeading,
  SliderWrapper,
  Figure,
} from './clients.style';
import { clients } from 'common/data/SaasAppCreative';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 10000, // a unrealistically big number to cover up greatest screen resolution
      settings: 'unslick',
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  return (
    <Section>
      <Container width="1400px">
        <SectionHeading>
          <h4>
            Simplified scheduling for more than <span>200,000</span> customers
          </h4>
        </SectionHeading>
        <SliderWrapper>
          <Slider {...settings}>
            {clients.map((client, i) => (
              <Figure key={i}>
                <NextImage src={client} alt="logo" />
              </Figure>
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </Section>
  );
};

export default Clients;
