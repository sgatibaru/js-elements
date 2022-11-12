import React from 'react';
import { Icon } from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import analytics from 'common/assets/image/saasCreative/analytics.png';
import Section, { Grid, Figure, Content } from './analytics.style';

const AdvancedAnalytics = () => {
  return (
    <Section>
      <Container width="1400px">
        <Grid>
          <Fade up>
            <Figure>
              <NextImage src={analytics} alt="analytics" />
            </Figure>
          </Fade>
          <Content>
            <Text className="subtitle" content="Audience Source Monitoring" />
            <Heading content="Advanced analytics tools to keep you in control & customizable" />
            <Text
              className="description"
              content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool."
            />
            <Link href="#" className="explore">
              Explore details <Icon icon={arrowRight} />
            </Link>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AdvancedAnalytics;
