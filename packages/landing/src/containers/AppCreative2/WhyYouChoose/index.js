import Heading from 'common/components/Heading';
import Link from 'common/components/Link';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { whyChooseUs } from 'common/data/AppCreative2';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Section, { Grid, Item, SectionHeading } from './whyYouChoose.style';


const WhyYouChoose = (props) => {
  return (
    <Section id="about" {...props}>
      <Container width="1400px">
        <SectionHeading>
          <Heading content="Why you choose this application" />
        </SectionHeading>
        <Grid>
          {whyChooseUs?.map((howTo) => (
            <Item key={howTo?.id}>
              <figure>
                <NextImage src={howTo?.icon} alt="icon" />
              </figure>
              <Heading as="h4" content={howTo?.title} />
              <Text content={howTo?.text} />
              <Link href={howTo?.link}>
                {howTo?.linkLabel} <Icon icon={arrowRight} />
              </Link>
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default WhyYouChoose;
