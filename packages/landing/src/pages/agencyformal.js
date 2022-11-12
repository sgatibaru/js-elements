import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/agencyFormal';
import ResetCSS from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/AgencyFormal/agencyFormal.style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/AgencyFormal/Navbar';
import Banner from 'containers/AgencyFormal/Banner';
import Services from 'containers/AgencyFormal/Services';
import PremiumFeature from 'containers/AgencyFormal/PremiumFeature';
import UltimateFeature from 'containers/AgencyFormal/UltimateFeature';
import Testimonial from 'containers/AgencyFormal/Testimonial';
import Pricing from 'containers/AgencyFormal/Pricing';
import News from 'containers/AgencyFormal/News';
import Footer from 'containers/AgencyFormal/Footer';

const AgencyFormal = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Agency Formal | A react next landing page</title>
          <meta name="theme-color" content="#4200FF" />
          <meta name="Description" content="React next landing page" />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Services />
          <PremiumFeature />
          <UltimateFeature />
          <Testimonial />
          <Pricing />
          <News />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default AgencyFormal;
