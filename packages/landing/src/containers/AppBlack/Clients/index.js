import React from 'react'
import Container from 'common/components/UI/Container'
import Heading from 'common/components/Heading'
import NextImage from 'common/components/NextImage'
import Box from 'common/components/Box'
import Logo from 'common/components/UIElements/Logo'
import ClientsWrapper, { ImageSlide, ImageSlider } from './clients.style'
import { CLIENTS_DATA } from 'common/data/AppBlack'
import Text from 'common/components/Text'
const Clients = () => {
  const { title, clients } = CLIENTS_DATA
  return (
    <ClientsWrapper>
      <Container>
        <Heading as='h2' content={title} className='section-title' />
        <ImageSlider>
          <ImageSlide>
            {clients.map((item) => (
              <Logo
                key={`slide1__key${item.id}`}
                href={item.link}
                logoSrc={item.logo}
                title={item.name}
              />
            ))}
          </ImageSlide>
          <ImageSlide>
            {clients.map((item) => (
              <Logo
                key={`slide2__key${item.id}`}
                href={item.link}
                logoSrc={item.logo}
                title={item.name}
              />
            ))}
          </ImageSlide>
        </ImageSlider>
      </Container>
    </ClientsWrapper>
  )
}

export default Clients
