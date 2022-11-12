import report1 from 'common/assets/image/saasAppDark/report1.png';
import report2 from 'common/assets/image/saasAppDark/report2.png';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { monitoringFeatures } from 'common/data/SaasAppDark';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Section, {
  Content,
  FeatureList, FigureGroup, Grid
} from './monitoring.style';

const Monitoring = () => {
  return (
    <Section>
      <Container width="1300px">
        <Grid>
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
          <Content>
            <Text className="subtitle" content="File System Tracking" />
            <Heading content="Advanced analytics tools to keep you in control" />
            <Text
              className="description"
              content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool with the new experience templates."
            />
            <FeatureList>
              {monitoringFeatures?.map((feature) => (
                <div className="feature" key={feature.id}>
                  <figure className="icon">
                    <img src={feature?.icon?.src} alt="feature icon" />
                  </figure>
                  <div className="feature-content">
                    <Heading as="h4" content={feature.title} />
                    <Text content={feature.desc} />
                  </div>
                </div>
              ))}
            </FeatureList>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default Monitoring;
