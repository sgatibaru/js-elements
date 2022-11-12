import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { CALL_TO_ACTION_DATA } from 'common/data/WebApp';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import CallToActionArea from './calltoaction.style';

const CallToAction = () => {
  const { title, text, button, bubbleIcon } = CALL_TO_ACTION_DATA;
  return (
    <CallToActionArea>
      {bubbleIcon.map(({ icon }, index) => (
        <div className={`callToAction-bubble-${index + 1}`} key={index}>
          <Image
            alt="bubble-icon"
            key={`bubble-icon-${index}`}
            src={icon}
          />
        </div>
      ))}
      <Container>
        <Heading as="h3" content={title} />
        <Text as="p" content={text} />
        <Link href={button.link}>
          <a className="button">
            <span>
              {button.label}
              <Icon icon={androidArrowForward} size={16} />
            </span>
          </a>
        </Link>
      </Container>
    </CallToActionArea>
  );
};

export default CallToAction;
