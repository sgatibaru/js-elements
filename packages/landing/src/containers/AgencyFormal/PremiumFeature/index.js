import React from 'react';
import { Icon } from 'react-icons-kit';
import { useMediaQuery } from 'react-responsive';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';
import Fade from 'react-reveal/Fade';

import Container from 'common/components/UI/ContainerTwo';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import List from 'common/components/List';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
  ButtonGroup,
} from './premiumFeature.style';
import data from 'common/data/AgencyFormal';
import paint from 'common/assets/image/agencyFormal/services/paint.png';

const PremiumFeature = () => {
  const isTab = useMediaQuery({ minWidth: 571, maxWidth: 768 });

  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Illustration>
            <Fade up>
              <NextImage src={paint} alt="paint" />
            </Fade>
          </Illustration>

          <Content>
            <Heading
              as="h2"
              content="Meet premium feature that will make you wow"
            />
            <Text content="It built to handle large volumes, high speeds, and the poor reliability endemic to crypto markets. Our solution handles connectivity to venues, executes trades." />
            <ButtonGroup>
              {data.premiumFeature.map((item) => (
                <List
                  className="button-item"
                  key={item.id}
                  text={<Text className="btn" content={item.title} />}
                  type="button"
                  icon={
                    <Icon
                      className="tick"
                      icon={ic_check_circle}
                      style={{ color: '#4200FF' }}
                      size={isTab ? 20 : 15}
                    />
                  }
                />
              ))}
            </ButtonGroup>
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default PremiumFeature;
