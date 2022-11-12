import React from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import Container from 'common/components/UI/Container'
import Heading from 'common/components/Heading'
import Text from 'common/components/Text'
import NextImage from 'common/components/NextImage'
import Box from 'common/components/Box'
import mapPin from 'common/assets/image/appBlack/banner-msg-icon.png'
import arrowIcon from 'common/assets/image/appBlack/banner-arrow.png'
import BannerWrapper, {
  ContentWrapper,
  ImageWrapper,
  EmailWrapper,
  DownloadButtonWrapper,
} from './banner.style'
import { BANNER_DATA } from 'common/data/AppBlack'
import { Waypoint } from 'react-waypoint'

const Banner = ({ setImg }) => {
  const { sectionImage, screenImage, title, text, tagLine, buttons } =
    BANNER_DATA
  return (
    <BannerWrapper id='banner_section'>
      <Container>
        <ContentWrapper>
          <Fade left>
            <Heading as='h2' content={title} className='section-title' />
            <Text as='p' className='paragraph' content={text} />
            <EmailWrapper>
              <img className='input-icon' src={mapPin?.src} alt={title} />
              <input
                type='text'
                placeholder='Enter Email address..'
                className='input-email'
              />
              <button className='input-button'>
                <img src={arrowIcon?.src} alt='banner button' />
              </button>
            </EmailWrapper>
            <Text as='p' className='tagLine' content={tagLine} />
            <DownloadButtonWrapper>
              {buttons.map((button, index) => (
                <Link href='/' key={`banner-button-${index}`}>
                  <section className='download-button'>
                    <img
                      src={button?.icon?.src}
                      width='30'
                      height='30'
                      alt={button?.title}
                      className='download-button-icon'
                    />
                    <Box className='download-button-content'>
                      <Text
                        as='span'
                        content={button?.text}
                        className='download-button-content-text'
                      />
                      <Text
                        as='p'
                        content={button?.title}
                        className='download-button-content-title'
                      />
                    </Box>
                  </section>
                </Link>
              ))}
            </DownloadButtonWrapper>
          </Fade>
        </ContentWrapper>

        <Waypoint onEnter={() => setImg(screenImage)} />

        <ImageWrapper>
          <Fade right>
            <NextImage
              src={sectionImage}
              alt={title}
              className='image'
              // layout='intrinsic'
            />
          </Fade>
        </ImageWrapper>
      </Container>
    </BannerWrapper>
  )
}

export default Banner
