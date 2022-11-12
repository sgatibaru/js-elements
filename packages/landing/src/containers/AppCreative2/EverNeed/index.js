import Container from 'common/components/UI/Container';
import React from 'react';
import EverNeed from './everNeed/everNeed';
import Section from './global.style';
import Testimonial from './testimonial/testimonial';

const CombinedSection = () => {
  return (
    <Section>
      <Container width="1400px">
        <EverNeed />
        <Testimonial id="testimonial" className="testimonial_area" />
      </Container>
    </Section>
  );
};

export default CombinedSection;
