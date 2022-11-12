import icon13 from 'common/assets/image/webAppMinimal/icons/13.png';
import icon14 from 'common/assets/image/webAppMinimal/icons/14.png';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { testimonials } from 'common/data/WebAppMinimal';
import React from 'react';
import Section, {
  Blockquote, Profile, SectionHeading, SlickCarousel
} from './testimonial.style';


const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  // fade: true,
  // autoplay: true,
  speed: 900,
  autoplaySpeed: 5000,
  // adaptiveHeight: true,
  customPaging: (i) => {
    return (
      <Profile>
        <figure>
          <Image src={testimonials[i].avatar?.src} alt={testimonials[i].name} />
        </figure>
        <div>
          <Heading as="h4" content={testimonials[i].name} />
          <Text content={testimonials[i].designation} />
        </div>
      </Profile>
    );
  },
  dotsClass: 'slick-dots slick-thumb',
};

const Testimonial = () => {
  return (
    <Section id="testimonial">
      <Container width="1400px">
        <SectionHeading>
          <Image src={icon13?.src} alt="love icon" />
          <Heading content="What people say about our product" />
        </SectionHeading>
        <SlickCarousel {...settings}>
          {testimonials.map((testimonial) => (
            <Blockquote key={testimonial.id}>
              <Image src={icon14?.src} alt="love icon" />
              {testimonial.quote}
            </Blockquote>
          ))}
        </SlickCarousel>
      </Container>
    </Section>
  );
};

export default Testimonial;
