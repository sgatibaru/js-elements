import Heading from 'common/components/Heading';
import { testimonialData } from 'common/data/AppCreative2';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from './carousel';
import TestimonialsArea, { SectionHeading } from './testimonials.style';


const Testimonial = (props) => {
  return (
    <div {...props}>
        <SectionHeading>
            <Heading content={testimonialData?.title} />
        </SectionHeading>
        
        {testimonialData?.posts?.length > 0 ?
        <Fade up>
          <TestimonialsArea id="testimonials">
            <Carousel data={testimonialData?.posts} />
          </TestimonialsArea>
        </Fade>
        :
        ""
        }
    </div>
  );
};

export default Testimonial;
