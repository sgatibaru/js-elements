import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { clients } from 'common/data/SaasAppDark';
import React, { Fragment } from 'react';
import Slider from 'react-slick';
import Section, { Figure, SliderWrapper, Title } from './clients.style';

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
        <Title>
          <Text content="Simplified scheduling for more than 200,000 customers" />
        </Title>
        <SliderWrapper>
          <Slider {...settings}>
            {clients.map((client, i) => (
              <Fragment key={i}>
                <Figure>
                  <NextImage src={client} alt="logo" />
                </Figure>
              </Fragment>
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </Section>
  );
};

export default Clients;
