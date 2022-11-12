import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import users from 'common/assets/image/saasCreative/users.png';
import Section, { SectionHeading, Figure } from './community.style';

const OurCommunity = () => {
  return (
    <Section>
      <Container width="1400px">
        <SectionHeading>
          <Text className="slogan" content="Our Community" />
          <Heading content="We are a community of 15,000+ Customer" />
          <Text
            className="description"
            content="RedQ, Inc’s core values evolved with us as the company grew and we learned from our experiences. They epitomise what we want to achieve, and they might change in the future, as we aim higher and higher. We think of those values as important to our culture and individual sense of accomplishment."
          />
        </SectionHeading>
        <Fade up>
          <Figure>
            <NextImage src={users} alt="users" />
          </Figure>
        </Fade>
      </Container>
    </Section>
  );
};

export default OurCommunity;
