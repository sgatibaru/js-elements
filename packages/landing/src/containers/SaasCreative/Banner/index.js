import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Input from 'common/components/Input';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Section, {
  BannerContentWrapper,
  BannerContent,
  Subscribe,
  Figure,
} from './banner.style';
import dashboard from 'common/assets/image/saasCreative/dashboard.png';

const Banner = () => {
  return (
    <Section id="home">
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Heading
              content="The leading Customer dashboard for your daily workspace"
              className="animate__animated animate__fadeInUp"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="Join 30,000+ businesses that use Segment's software and APIs to
              collect, clean, and control their customer data."
            />
            <Subscribe className="animate__animated animate__fadeInUp">
              <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
              />
              <Button title="Subscribe" type="submit" />
            </Subscribe>
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
