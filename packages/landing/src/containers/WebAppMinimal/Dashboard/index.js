import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { tabs } from 'common/data/WebAppMinimal';
import React from 'react';
import { Tab, TabPanel } from 'react-tabs';
import Section, {
  Illustration, ReactTabs, SectionHeading, TabNavbar
} from './dashboard.style';


const Dashboard = () => {
  return (
    <Section id="features">
      <Container width="1400px">
        <SectionHeading>
          <Heading content="Get on the same page, fast &amp; easily" />
          <Text content="Each room is loaded with collaborative surfaces so you can quickly take notes, capture to-dos, and share ideas. Pick one of our stock themes, or create your custom theme with the most advanced theme editor." />
        </SectionHeading>
        <ReactTabs>
          <TabNavbar>
            {tabs?.map((tab, index) => (
              <Tab key={index}>
                <figure>
                  <div className='image-wrapper'>
                    <Image src={tab.nav.icon?.src} alt={tab.nav.title} />
                    <div className={`divider-line ${index === 0 ? 'right' : 'left'}`} />
                  </div>
                  <Text as="figcaption" content={tab.nav.title} />
                </figure>
              </Tab>
            ))}
          </TabNavbar>

          {tabs?.map((tab) => (
            <TabPanel key={tab.id}>
              <Illustration className="animate__animated animate__fadeInUp">
                <NextImage src={tab.content.image} alt="dashboard" />
              </Illustration>
            </TabPanel>
          ))}
        </ReactTabs>
      </Container>
    </Section>
  );
};

export default Dashboard;
