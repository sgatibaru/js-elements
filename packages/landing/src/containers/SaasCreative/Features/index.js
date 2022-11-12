import React from 'react';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, { SectionHeading, Grid, Item } from './features.style';

import { features } from 'common/data/SaasCreative';

const Features = () => {
  return (
    <Section id="features">
      <Container width="1400px">
        <SectionHeading>
          <Heading content="So How Does UserPlace Work ?" />
          <Text content="See some of the features below and learn why businesses trust UserPlace" />
        </SectionHeading>
        <Grid>
          {features.map((feature) => (
            <Item key={feature.id}>
              <figure>
                <NextImage src={feature.icon} alt="icon" />
              </figure>
              <Heading as="h4" content={feature.title} />
              <Text content={feature.description} />
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
