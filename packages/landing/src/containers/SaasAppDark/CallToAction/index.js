import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import { Icon } from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import Section, { BGImage, SectionHeading } from './cta.style';

const VideoIntro = () => {
  return (
    <Section id="">
      <BGImage>
        <SectionHeading>
          <Text
            as="span"
            className="subtitle"
            content="What we have integrate with"
          />
          <Heading content="We have more than 20+ Integrations" />
          <Text content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. It is built to perform and run fast on all of the latest mobile devices." />
          <Button title="View all Integrations" icon={<Icon icon={arrowRight2} />} iconPosition="right" />
        </SectionHeading>
      </BGImage>
    </Section>
  );
};

export default VideoIntro;
