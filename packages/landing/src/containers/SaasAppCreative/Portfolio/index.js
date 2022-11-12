import React from 'react';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Section, {
  SectionHeading,
  Grid,
  PortfolioItem,
  Figure,
} from './portfolio.style';

import { portfolios } from 'common/data/SaasAppCreative';

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Container width="1360px">
        <SectionHeading>
          <Text content="Previous Experience" />
          <Heading content="Whats our Project Portfolio" />
        </SectionHeading>
        <Grid>
          {portfolios.map((portfolio) => (
            <PortfolioItem key={portfolio.id} bgColor={portfolio.bgColor}>
              <Heading as="h3" content={portfolio.title} />
              <Text content={portfolio.description} />
              <Figure>
                <Image src={portfolio.media?.src} alt={portfolio.title} />
              </Figure>
            </PortfolioItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Portfolio;
