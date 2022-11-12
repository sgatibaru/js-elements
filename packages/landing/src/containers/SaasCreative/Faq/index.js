import React, { useState, Fragment } from 'react';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import Section, { SectionHeading, AccordionWrapper } from './faq.style';
import Collapse, { Panel } from 'rc-collapse';

import { faqs } from 'common/data/SaasCreative';

const getCollapsedHeight = () => ({ height: 0, opacity: 0 });
const getRealHeight = (node) => ({ height: node.scrollHeight, opacity: 1 });
const getCurrentHeight = (node) => ({ height: node.offsetHeight });
const skipOpacityTransition = (_, event) => event.propertyName === 'height';

const motion = {
  motionName: 'rc-collapse-motion',
  onEnterStart: getCollapsedHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500,
  leavedClassName: 'rc-collapse-content-hidden',
};

const Faq = () => {
  const [activeKey, setActiveKey] = useState(1);

  const onChange = (activeKey) => {
    setActiveKey(activeKey);
  };

  return (
    <Section id="faq">
      <Container className="container">
        <SectionHeading>
          <Heading content="Frequently Ask Question" />
        </SectionHeading>
        <AccordionWrapper>
          <Collapse
            collapsible={undefined}
            accordion={true}
            activeKey={activeKey}
            onChange={onChange}
            openMotion={motion}
          >
            {faqs?.map((faq) => (
              <Panel
                key={faq.id}
                showArrow={false}
                header={
                  <Fragment>
                    <Heading as="h4" content={faq.title} />
                    <span className="icon">
                      <Icon icon={minus} size={20} className="minus" />
                      <Icon icon={plus} size={20} className="plus" />
                    </span>
                  </Fragment>
                }
              >
                {faq.description}
              </Panel>
            ))}
          </Collapse>
        </AccordionWrapper>
      </Container>
    </Section>
  );
};

export default Faq;
