import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { walletExperience } from 'common/data/AppCreative2';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Section, {
  Content, FeatureGroup,
  FeatureItem, Figure, FigureWrapper, Grid, SectionHeading
} from './experience.style';


const WalletExperience = ({props}) => {
  return (
    <Section {...props}>
      <Container width="1400px">
        <Grid>
            <FigureWrapper>
              <Fade up>
                <Figure>
                  <NextImage src={walletExperience?.thumb} alt="analytics" />
                </Figure>
              </Fade>
            </FigureWrapper>
          <Content>
            <SectionHeading>
              <Text className="subtitle" content={walletExperience?.slogan} />
              <Heading content={walletExperience?.title} />
              <Text
                className="description"
                content={walletExperience?.desc}
              />
            </SectionHeading>
            {walletExperience?.features?.length ?
            <FeatureGroup>
              {walletExperience?.features?.map((feature, index) => {
                return (
                  <FeatureItem key={index}>
                    <figure>
                      <NextImage src={feature?.icon} alt="clock icon" />
                    </figure>
                    <div>
                      <Heading as="h4" content={feature?.title} />
                      <Text
                          className="description"
                          content={feature?.content}
                      />
                    </div>
                  </FeatureItem>
                )
              })}
            </FeatureGroup>
            :
            ""
            }
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default WalletExperience;
