import React from 'react';
import Container from 'common/components/UI/ContainerTwo';
import Link from 'common/components/Link';
import { Section, Grid, FooterWidget } from './footer.style';
import { footer } from 'common/data/SaasCreative';

const Footer = () => {
  return (
    <Section>
      <Container>
        <Grid>
          {footer.map((item) => (
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
        </Grid>
      </Container>
    </Section>
  );
};

export default Footer;
