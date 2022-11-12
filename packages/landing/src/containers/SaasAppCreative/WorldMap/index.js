import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import worldMap from 'common/assets/image/saasAppCreative/world-map.png';
import Section, { SectionHeading, Figure } from './worldMap.style';

const OurCommunity = () => {
  return (
    <Section>
      <Container>
        <SectionHeading>
          <Text className="slogan" content="What is our mission?" />
          <Heading content="We are expanding worldwide to people" />
          <Text
            className="description"
            content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Create professional ads, branded content, and stunning stories in minutes."
          />
        </SectionHeading>
        <Fade up>
          <Figure>
            <NextImage src={worldMap} alt="World Map" />
          </Figure>
        </Fade>
      </Container>
    </Section>
  );
};

export default OurCommunity;
