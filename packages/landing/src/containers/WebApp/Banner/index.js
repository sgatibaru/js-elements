import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { BANNER_DATA } from 'common/data/WebApp';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import BannerArea, { Col } from './banner.style';

const Banner = () => {
  const { title, text, button, image, tagline } = BANNER_DATA;
  return (
    <BannerArea id="banner_section">
      <Container className="Container">
        <Col>
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
          <Box className="ButtonWrap">
            <Link href={button.link}>
              <a className="Button">
                {button.label}
                <Icon size={18} icon={androidArrowForward} />
              </a>
            </Link>
            <Text as="span" content={tagline} />
          </Box>
        </Col>
      </Container>
      <Box className="bannerImage">
        {image.map(({ src }, index) => (
          <Image src={src} alt="" key={`banner-image-key-${index}`} />
        ))}
      </Box>
    </BannerArea>
  );
};

export default Banner;
