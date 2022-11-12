import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { COUNTER_DATA } from 'common/data/WebApp';
import Link from 'next/link';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import CounterArea, { Row } from './counter.style';
const Counter = () => {
  const { blockTitle, posts } = COUNTER_DATA;
  const { title, text, button } = blockTitle;
  return (
    <CounterArea>
      <Container>
        <Row>
          <Box className="blockTitle">
            <Heading as="h2" content={title} />
            <Text as="p" content={text} />
            <Link href={button.link}>
              <a className="button">
                <span>
                  {button.label}
                  <Icon icon={androidArrowForward} size={16} />
                </span>
              </a>
            </Link>
          </Box>
          <Box className="postsWrap">
            {posts.map(({ count, text, title, symbol }, index) => (
              <Box className="post" key={`counter-post-key-${index}`}>
                <Text as="p" content={title} />
                <Box className="postCount">
                  <Heading as="h3" content={count} />
                  <Text as="span" content={symbol} />
                </Box>
                <Text as="p" content={text} />
              </Box>
            ))}
          </Box>
        </Row>
      </Container>
    </CounterArea>
  );
};

export default Counter;
