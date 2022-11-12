import Box from 'common/components/Box'
import Heading from 'common/components/Heading'
import Image from 'common/components/Image'
import NextImage from 'common/components/NextImage'
import Text from 'common/components/Text'
import Container from 'common/components/UI/Container'
import { SERVICE_DATA } from 'common/data/AppBlack'
import React from 'react'
import { Fade } from 'react-reveal'
import ServiceWrapper, {
  ContentWrapper,
  ServiceItemsWrapper,
  ImageWrapper,
} from './service.style'
import { Waypoint } from 'react-waypoint'

const { title, text, sectionImage, screenImage, serviceItems } = SERVICE_DATA

function Service({ setImg }) {
  return (
    <ServiceWrapper id='service_section'>
      <Container>
        <ContentWrapper>
          <Fade left>
            <Heading as='h2' content={title} className='section-title' />
            <Text as='p' content={text} className='paragraph' />

            <ServiceItemsWrapper>
              {serviceItems.map((item, index) => (
                <Box
                  className='service-item'
                  key={`quality-features-key-${index}`}
                >
                  <Box className='service-item-icon-holder'>
                    <Image
                      src={item?.icon?.src}
                      alt={item?.title}
                      className='service-item-icon'
                    />
                  </Box>
                  <Text
                    as='p'
                    className='service-item-title'
                    content={item?.title}
                  />
                </Box>
              ))}
            </ServiceItemsWrapper>
          </Fade>
        </ContentWrapper>

        <Waypoint onEnter={() => setImg(screenImage)} />

        <ImageWrapper>
          <Fade right>
            <NextImage src={sectionImage} alt='' className='image' />
          </Fade>
        </ImageWrapper>
      </Container>
    </ServiceWrapper>
  )
}

export default Service
