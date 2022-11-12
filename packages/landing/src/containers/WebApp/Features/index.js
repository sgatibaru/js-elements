import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { FEATURE_DATA } from 'common/data/WebApp';
import Image from 'next/image';
import React from 'react';
import FeatureArea from './features.style';
const Features = () => {
  const { blockTitle, post } = FEATURE_DATA;
  const { title, text } = blockTitle;
  return (
    <FeatureArea id="feature_section">
      <Container>
        <Box className="blockTitle">
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
        </Box>
        <Box className="postWrap">
          {post?.map(({ icon, text }, index) => (
            <Box className="post" key={`feature-post-key-${index}`}>
              <div className='feature-image-box'>
                <div className='feature-image-box-inner'>
                  <Image src={icon} alt="" />
                </div>
              </div>
              <Heading as="h3" content={text} />
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureArea>
  );
};

export default Features;
