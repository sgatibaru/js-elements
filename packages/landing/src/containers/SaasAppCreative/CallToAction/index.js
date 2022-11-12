import React from 'react';
import Container from 'common/components/UI/Container';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import playStore from 'common/assets/image/saasAppCreative/play-store.png';
import appStore from 'common/assets/image/saasAppCreative/app-store.png';
import Section, { Content, DownloadCenter } from './cta.style';

const CallToAction = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Text className="slogan" content="Download Saas Product" />
          <Heading content="Personalize ultimate dashboard in minutes." />
          <Text
            className="description"
            content="Download Over on your smartphone, and get instant access to thousands of curated templates, graphics, photos, and fonts."
          />
          <DownloadCenter>
            <Link href="#">
              <figure>
                <Image src={playStore?.src} alt="google play store" />
              </figure>
            </Link>
            <Link href="#">
              <figure>
                <Image src={appStore?.src} alt="apple app store" />
              </figure>
            </Link>
          </DownloadCenter>
        </Content>
      </Container>
    </Section>
  );
};

export default CallToAction;
