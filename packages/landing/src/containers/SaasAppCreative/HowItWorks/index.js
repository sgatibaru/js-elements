import React from 'react';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, { SectionHeading, Grid, Item } from './howItWorks.style';
import rightArrow from 'common/assets/image/saasAppCreative/icons/right-arrow.svg';

import { howTos } from 'common/data/SaasAppCreative';

const HowItWorks = () => {
  return (
    <Section id="how-to">
      <Container width="1360px">
        <SectionHeading>
          <Text content="Introducing our service" />
          <Heading content="Let’s explore how it works" />
        </SectionHeading>
        <Grid>
          {howTos.map((howTo) => (
            <Item key={howTo.id}>
              <figure>
                <NextImage src={howTo.icon} alt="icon" />
              </figure>
              <Heading as="h4" content={howTo.title} />
              <Text content={howTo.text} />
              <Link href={howTo.link}>
                {howTo.linkLabel}
                <img src={rightArrow?.src} alt="right arrow icon" />
              </Link>
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default HowItWorks;
