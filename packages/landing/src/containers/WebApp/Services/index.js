import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { SERVICE_DATA } from 'common/data/WebApp';
import Image from 'next/image';
import React from 'react';
import ServicesArea, { Col, Row } from './services.style';
const Services = () => {
  return (
    <ServicesArea id="service_section">
      <Container>
        <Row>
          {SERVICE_DATA?.map(({ icon, title, text }, index) => (
            <Col key={`service-post-key-${index}`}>
              <Box className="servicePost">
                <div className='service-icon' style={{"--width": `${icon?.width}px`}}>
                  <Image src={icon} alt="" />
                </div>
                <Box className="content">
                  <Heading as="h3" content={title} />
                  <Text as="p" content={text} />
                </Box>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </ServicesArea>
  );
};

export default Services;
