import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Section, {
  Pattern,
  BannerContentWrapper,
  BannerContent,
  Figure,
} from './banner.style';
import dashboard from 'common/assets/image/webAppMinimal/dashboard.png';

const Banner = () => {
  return (
    <Section id="home">
      <Pattern />
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Heading
              className="animate__animated animate__fadeInUp"
              content="The leading Customer dashboard for your daily workspace"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="Join 30,000+ businesses that use Segment's software and APIs to collect, clean, and control their customer data."
            />
          </BannerContent>
          <Figure className="animate__animated animate__fadeInUp animate__fast">
            <NextImage src={dashboard} alt="dashboard" />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
