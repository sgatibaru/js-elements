import React from 'react'
import PropTypes from 'prop-types'
import Box from 'common/components/Box'
import Text from 'common/components/Text'
import Heading from 'common/components/Heading'
import Button from 'common/components/Button'
import Image from 'common/components/Image'
import Container from 'common/components/UI/Container'
import GlideCarousel from 'common/components/GlideCarousel'
import GlideSlide from 'common/components/GlideCarousel/glideSlide'
import TestimonialSecWrapper, {
  ImageWrapper,
  TestimonialItem,
} from './testimonials.style'

import { TESTIMONIALS } from 'common/data/AppBlack/index'

const TestimonialSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  reviewStyle,
  TestimonialMeta,
  nameStyle,
  designationStyle,
}) => {
  //Carousel Options
  const carouselOptions = {
    type: 'carousel',
    autoplay: 4000,
    perView: 4,
    gap: 30,
    animationDuration: 800,
    peek: {
      before: 250,
      after: 250,
    },
    breakpoints: {
      2400: {
        perView: 3,
        peek: {
          before: 220,
          after: 220,
        },
      },
      1566: {
        perView: 2,
        peek: {
          before: 220,
          after: 220,
        },
      },
      1400: {
        perView: 2,
        peek: {
          before: 160,
          after: 160,
        },
      },
      1200: {
        perView: 2,
        peek: {
          before: 100,
          after: 100,
        },
      },
      990: {
        perView: 2,
        peek: {
          before: 100,
          after: 100,
        },
      },
      800: {
        perView: 1,
        peek: {
          before: 120,
          after: 120,
        },
      },
      575: {
        perView: 1,
        peek: {
          before: 0,
          after: 0,
        },
      },
    },
  }

  return (
    <TestimonialSecWrapper id='testimonial_section'>
      <Container fullWidth noGutter>
        <Box {...secTitleWrapper}>
          <Heading {...secHeading} content='What our clients say about us' />
        </Box>
        <GlideCarousel
          options={carouselOptions}
          nextButton={
            <Button
              icon={<i className='flaticon-next' />}
              variant='textButton'
              aria-label='next button'
            />
          }
          prevButton={
            <Button
              icon={<i className='flaticon-left-arrow' />}
              variant='textButton'
              aria-label='prev button'
            />
          }
        >
          <>
            {TESTIMONIALS.map((slideItem, index) => (
              <GlideSlide key={`testimonial-slide-${index}`}>
                <TestimonialItem className='testimonial_item'>
                  <Box {...TestimonialMeta}>
                    <ImageWrapper>
                      <Image
                        src={slideItem.avatar?.src}
                        alt={`reviewer-image-${index}`}
                      />
                    </ImageWrapper>
                    <Box>
                      <Heading content={slideItem.name} {...nameStyle} />
                      <Text
                        content={slideItem.designation}
                        {...designationStyle}
                      />
                    </Box>
                  </Box>
                  <Text content={slideItem.review} {...reviewStyle} />
                </TestimonialItem>
              </GlideSlide>
            ))}
          </>
        </GlideCarousel>
      </Container>
    </TestimonialSecWrapper>
  )
}

TestimonialSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  reviewStyle: PropTypes.object,
  TestimonialMeta: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
}

TestimonialSection.defaultProps = {
  secTitleWrapper: {
    mb: ['40px', '40px', '50px', '75px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    mb: '0',

    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '26px',
    lineHeight: '31px',
    textAlign: 'center',
    color: '#000000',
  },
  reviewStyle: {
    fontSize: ['16px', '16px', '17px', '17px', '19px'],
    fontWeight: '300',
    color: '#343d48',
    lineHeight: '1.74',
    mt: ['10px', '10px', '10px', '20px', '25px'],

    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '17px',
    lineHeight: '30px',
    letterSpacing: '-0.3px',
    color: '#19191B',
  },
  TestimonialMeta: {
    flexBox: true,
    alignItems: 'center',
  },
  nameStyle: {
    as: 'h3',
    mb: '0px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '-0.656526px',
    color: '#19191B',
  },
  designationStyle: {
    mb: '0',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '28px',
    letterSpacing: '-0.500211px',
    color: '#696871',
  },
}

export default TestimonialSection
