import Heading from 'common/components/Heading';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { callToAction } from 'common/data/AppCreative2';
import React from 'react';
import Section, { Content } from './cta.style';

const CTA = (props) => {
  return (
    <Section {...props} id="cta">
      <Container width="1400px">
        <Content className='cat_content_wrapper'>
          <Heading content={callToAction?.title} />

          <Text content={callToAction?.content} />

          <Link href={callToAction?.button?.link} className='call_to_action_link'>
            {callToAction?.button?.label}
          </Link>

          <span className='call_to_action_info'>{callToAction?.info}</span>
        </Content>
      </Container>
    </Section>
  );
};

export default CTA;
