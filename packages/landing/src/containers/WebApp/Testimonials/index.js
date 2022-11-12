import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { TESTIMONIALS_DATA } from 'common/data/WebApp';
import Image from 'next/image';
import React from 'react';
import Carousel from './carousel';
import TestimonialsArea from './testimonials.style';
const Testimonials = () => {
  const { blockImage, title, posts } = TESTIMONIALS_DATA;
  return (
    <TestimonialsArea>
      <Container>
        <Box className="blockTitle">
          <Image src={blockImage} alt="shape image" />
          <Heading as="h2" content={title} />
        </Box>
        <Carousel data={posts} />
      </Container>
    </TestimonialsArea>
  );
};

export default Testimonials;
