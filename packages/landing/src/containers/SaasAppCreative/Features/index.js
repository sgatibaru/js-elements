import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Box from 'common/components/Box';
import Section, { SectionHeading, Grid, FeatureCard } from './features.style';

import { features } from 'common/data/SaasAppCreative';

const Features = () => {
  return (
    <Section id="features">
      <Container width="1360px">
        <SectionHeading>
          <Text content="Key selling points" />
          <Heading content="What the features of product" />
        </SectionHeading>
        <Grid>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <Image src={feature.icon?.src} alt="service image" />
              <Box>
                <Heading as="h4" content={feature.title} />
                <Text as="p" content={feature.content} />
              </Box>
            </FeatureCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
