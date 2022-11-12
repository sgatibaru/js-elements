import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';

import { designAndBuilt } from 'common/data/AppClassic';

const DesignedAndBuilt = () => {
  const { image, title, description } = designAndBuilt;

  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="image">
            <NextImage src={image} alt="Built Logo" />
          </div>
          <div className="content">
            <Heading content={title} />
            <Text content={description} />
            <Button title="Learn More" />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
