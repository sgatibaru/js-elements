import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Section, { Grid, FigureGroup, Content } from './systemMonitoring.style';
import rightArrow from 'common/assets/image/saasAppCreative/icons/right-arrow.svg';
import report1 from 'common/assets/image/saasAppCreative/report1.png';
import report2 from 'common/assets/image/saasAppCreative/report2.png';

const SystemMonitoring = () => {
  return (
    <Section>
      <Container width="1360px">
        <Grid>
          <Content>
            <Text className="subtitle" content="File System Tracking" />
            <Heading content="Take your user monitoring  system to new ultimate  level with file tracking" />
            <Text
              className="description"
              content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Create professional ads, branded content, and stunning stories in minutes."
            />
            <Link href="#" className="explore">
              Explore details
              <img src={rightArrow?.src} alt="right arrow icon" />
            </Link>
          </Content>
          <FigureGroup>
            <Fade up>
              <NextImage src={report1} alt="report1" />
            </Fade>
            <div className="graph-2">
              <Fade up delay={200}>
                <NextImage src={report2} alt="report2" />
              </Fade>
            </div>
          </FigureGroup>
        </Grid>
      </Container>
    </Section>
  );
};

export default SystemMonitoring;
