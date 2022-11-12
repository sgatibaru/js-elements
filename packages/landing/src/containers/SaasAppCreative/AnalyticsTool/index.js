import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Section, { Grid, FigureGroup, Content } from './analytics.style';
import rightArrow from 'common/assets/image/saasAppCreative/icons/right-arrow.svg';
import graph1 from 'common/assets/image/saasAppCreative/graph1.png';
import graph2 from 'common/assets/image/saasAppCreative/graph2.png';

const AnalyticsTool = () => {
  return (
    <Section id="features">
      <Container width="1360px">
        <Grid>
          <FigureGroup>
            <Fade up>
              <NextImage src={graph1} alt="graph1" />
            </Fade>
            <div className="graph-2">
              <Fade up delay={200}>
                <NextImage src={graph2} alt="graph2" />
              </Fade>
            </div>
          </FigureGroup>
          <Content>
            <Text className="subtitle" content="Audience Monitoring" />
            <Heading content="Advanced analytics tools to keep you in control &amp; customizable" />
            <Text
              className="description"
              content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Create professional ads, branded content, and stunning stories in minutes."
            />
            <Link href="#" className="explore">
              Explore details
              <img src={rightArrow?.src} alt="right arrow icon" />
            </Link>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AnalyticsTool;
