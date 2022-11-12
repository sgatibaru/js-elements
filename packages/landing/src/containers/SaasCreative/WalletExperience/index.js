import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import analytics from 'common/assets/image/saasCreative/analytics.png';
import icon11 from 'common/assets/image/saasCreative/icons/11.png';
import icon12 from 'common/assets/image/saasCreative/icons/12.png';
import Section, {
  Grid,
  Figure,
  Content,
  SectionHeading,
  FeatureGroup,
  FeatureItem,
} from './experience.style';

const WalletExperience = () => {
  return (
    <Section>
      <Container width="1400px">
        <Grid>
          <Content>
            <SectionHeading>
              <Text className="subtitle" content="Ultimate Wallet Experience" />
              <Heading content="Take your wallet experience to new ultimate level" />
              <Text
                className="description"
                content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool."
              />
            </SectionHeading>
            <FeatureGroup>
              <FeatureItem>
                <figure>
                  <NextImage src={icon11} alt="clock icon" />
                </figure>
                <div>
                  <Heading as="h4" content="Fast &amp; Instant Transfer" />
                  <Text
                    className="description"
                    content="We’re driven beyond just finishing the projects. We want to find solutions."
                  />
                </div>
              </FeatureItem>
              <FeatureItem>
                <figure>
                  <NextImage src={icon12} alt="folder icon" />
                </figure>
                <div>
                  <Heading as="h4" content="File Management System" />
                  <Text
                    className="description"
                    content="We’re driven beyond just finishing the projects. We want to find solutions with the assessment."
                  />
                </div>
              </FeatureItem>
            </FeatureGroup>
          </Content>
          <Fade up>
            <Figure>
              <NextImage src={analytics} alt="analytics" />
            </Figure>
          </Fade>
        </Grid>
      </Container>
    </Section>
  );
};

export default WalletExperience;
