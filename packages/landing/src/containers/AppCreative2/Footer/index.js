import React from 'react';
import Footer_Bottom from './footer.bottom';
import { Section } from './footer.style';
import FooterTop from './footer.top';

const Footer = (props) => {
  return (
    <Section {...props}>
      <FooterTop width="1400px" />
      <Footer_Bottom width="1400px" />
    </Section>
  );
};

export default Footer;
