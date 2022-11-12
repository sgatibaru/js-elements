import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/saasCreative';
import ResetCSS from 'common/assets/css/style';
import BannerSection from 'containers/SaasCreative/Banner';
import Navbar from 'containers/SaasCreative/Navbar';
import Clients from 'containers/SaasCreative/Clients';
import HowItWorks from 'containers/SaasCreative/HowItWorks';
import AdvancedAnalytics from 'containers/SaasCreative/AdvancedAnalytics';
import Features from 'containers/SaasCreative/Features';
import WalletExperience from 'containers/SaasCreative/WalletExperience';
import Testimonial from 'containers/SaasCreative/Testimonial';
import Pricing from 'containers/SaasCreative/Pricing';
import OurCommunity from 'containers/SaasCreative/OurCommunity';
import Faq from 'containers/SaasCreative/Faq';
import CallToAction from 'containers/SaasCreative/CallToAction';
import Footer from 'containers/SaasCreative/Footer';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/SaasCreative/saasCreative.style';
import 'animate.css';

const SaasCreative = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>SaaS Creative | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@400;500;700;800&display=swap"
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
          <BannerSection />
          <Clients />
          <HowItWorks />
          <AdvancedAnalytics />
          <Features />
          <WalletExperience />
          <Testimonial />
          <Pricing />
          <OurCommunity />
          <Faq />
          <CallToAction />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasCreative;
