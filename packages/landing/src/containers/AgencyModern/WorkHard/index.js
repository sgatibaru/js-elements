import React from 'react';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'common/components/UI/ContainerTwo';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import List from 'common/components/List';
import Link from 'common/components/Link';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
  ListGroup,
} from './workHard.style';
import data from 'common/data/AgencyModern';
import illustration from 'common/assets/image/agencyModern/work-hard-illustration.png';
import checkIcon from 'common/assets/image/agencyModern/tick-circle.png';

const WorkHard = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content>
            <Heading
              as="h2"
              content="Don’t work hard, be smart &amp; work smartly. Take relax sit"
            />
            <Text content="Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever." />
            <ListGroup>
              {data.WorkHardList.map((item) => (
                <List
                  className="list-item"
                  key={item.id}
                  text={item.title}
                  icon={
                    <img
                      src={checkIcon?.src}
                      alt="tick icon"
                      className="check-icon"
                    />
                  }
                />
              ))}
            </ListGroup>
            <Link className="explore" href="#">
              Explore more <Icon icon={chevronRight} />
            </Link>
          </Content>
          <Illustration>
            <NextImage src={illustration} alt="Illustration" />
          </Illustration>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default WorkHard;
