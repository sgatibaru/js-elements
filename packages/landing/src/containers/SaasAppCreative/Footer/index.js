import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_place } from 'react-icons-kit/md/ic_place';
import { ic_phone } from 'react-icons-kit/md/ic_phone';
import { paperPlane } from 'react-icons-kit/fa/paperPlane';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import {
  Section,
  Grid,
  AboutUs,
  FooterWidget,
  ContactInfo,
  InfoItem,
} from './footer.style';
import { footer } from 'common/data/SaasAppCreative';

const Footer = () => {
  return (
    <Section>
      <Container width="1360px">
        <Grid>
          <AboutUs>
            <Image src={footer.about.logo?.src} alt="SaaS App Creative" />
            <Text content={footer.about.text} />
          </AboutUs>
          {footer.widgets.map((item) => (
            <FooterWidget key={item.id}>
              <h4>{item.title}</h4>
              <ul>
                {item.list.map((item) => (
                  <li className="widgetListItem" key={item.id}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </FooterWidget>
          ))}
          <ContactInfo>
            <Heading as="h4" content={footer.contactInfo.title} />
            <InfoItem>
              <Icon icon={ic_place} size={24} />
              <Text content={footer.contactInfo.address} />
            </InfoItem>
            <InfoItem>
              <Icon icon={ic_phone} size={26} className="phone-icon" />
              <div>
                <Text
                  className="phone-number"
                  content={footer.contactInfo.phone}
                />
                <Text content={footer.contactInfo.openingTime} />
              </div>
            </InfoItem>
            <InfoItem>
              <Icon icon={paperPlane} size={22} />
              <Text content={footer.contactInfo.email} />
            </InfoItem>
          </ContactInfo>
        </Grid>
      </Container>
    </Section>
  );
};

export default Footer;
