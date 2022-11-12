import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Section, {
  Grid,
  Figure,
  Content,
  SectionHeading,
  FigureWrapper
} from './technology.style';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Button from 'common/components/Button';
import Link from 'common/components/Link';
import { Icon } from 'react-icons-kit';
import { technologyCommunity } from 'common/data/AppCreative2'

const WalletExperience = () => {
  return (
    <Section>
      <Container width="1400px">
        <Grid>
            <Content>
                <SectionHeading>
                  <Text className="subtitle" content={technologyCommunity?.slogan} />
                  <Heading content={technologyCommunity?.title} />
                  <Text
                      className="description"
                      content={technologyCommunity?.desc}
                  />
                  <Link href={technologyCommunity?.button?.link} className="explore">
                      <Button
                          title={technologyCommunity?.button?.label}
                          icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}
                      />
                  </Link>
                </SectionHeading>
            </Content>
            <FigureWrapper>
                <Fade up>
                    <Figure>
                        <NextImage src={technologyCommunity?.thumb} alt="analytics" />
                    </Figure>
                </Fade>
            </FigureWrapper>
        </Grid>
      </Container>
    </Section>
  );
};

export default WalletExperience;
