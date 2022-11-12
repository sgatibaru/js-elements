import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_chevron_right } from 'react-icons-kit/md/ic_chevron_right';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Link from 'common/components/Link';
import Text from 'common/components/Text';

import {
  Section,
  ContentWrapper,
  Illustration,
  TextContent,
} from './trackAudience.style';

import illustration from 'common/assets/image/saasMinimal2/track-audience.png';

const TrackAudience = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <Illustration>
            <NextImage src={illustration} alt="illustration" />
          </Illustration>
          <TextContent>
            <Text
              as="span"
              className="slogan"
              content="Audience source monitoring"
            />
            <Heading
              className="title"
              content="Track your audience and bounce rate with unique customers"
            />
            <Text
              className="desc"
              content="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. We’re driven beyond just finishing the projects. We want to find smart business solutions with ideas."
            />
            <Link className="link" href="#">
              Learn More <Icon size={20} icon={ic_chevron_right} />
            </Link>
          </TextContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default TrackAudience;
