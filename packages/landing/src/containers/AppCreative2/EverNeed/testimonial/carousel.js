import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import testimonialsQuote from 'common/assets/image/appCreativeTwo/icons/left-quote.png';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Rating from 'common/components/Rating';
import Text from 'common/components/Text';
import React, { useEffect } from 'react';

const Carousel = ({ data }) => {
  useEffect(() => {
    const glide = new Glide('#glide_carousel', {
      type: 'carousel',
      perView: 1,
      gap: 0,
    });
    glide.mount();
  });

  return (
    <div className="glide" id="glide_carousel">
      <div className="slide__wrapper">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {data?.map(({ image, logo, text, name, designation, rating, button }, index) => (
              <li className="glide__slide" key={`glide__slide--key${index}`}>
                <div className="testimonial_card">
                  <div className='testimonial_card_body'>
                    <div className="testimonials_left_content">
                      <Image
                        className="quoteImage"
                        src={testimonialsQuote?.src}
                        alt="testimonials image"
                      />
                      <Text as="p" content={text} />
                      <div className='reviewer_content_wrapper'>
                        <div className='testimonial_reviewer_image'>
                          <Image src={image?.src} alt={name} />
                        </div>
                        <div className='reviewer_content'>
                          <Heading as="h3" className="testimonial_name" content={name} />
                          <Text as="span" className="testimonial_designation" content={designation} />
                          <Image className="testimonial_logo" src={logo?.src} alt={name} />
                        </div>
                      </div>
                    </div>
                    <div className="testimonials_right_content">
                      <div className='testimonial_reviewer_image'>
                        <Image src={image?.src} alt={name} />
                        <Rating rating={rating} />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_card_footer">
                    <Link href={button?.link}>
                      {button?.label}
                      <svg width="16" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.469 1 5.625 5.625-5.625 5.625M13.313 6.625H1.905" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="glide__bullets"
        data-glide-el="controls[nav]"
      >
        {data.map((button, index) => (
          <button
            className="glide__bullet"
            data-glide-dir={`=${index}`}
            key={`glide_bullet--key${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
