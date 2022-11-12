import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/saasAppCreative';
import ResetCSS from 'common/assets/css/style';
import Banner from 'containers/SaasAppCreative/Banner';
import Navbar from 'containers/SaasAppCreative/Navbar';
import Clients from 'containers/SaasAppCreative/Clients';
import HowItWorks from 'containers/SaasAppCreative/HowItWorks';
import AnalyticsTool from 'containers/SaasAppCreative/AnalyticsTool';
import Portfolio from 'containers/SaasAppCreative/Portfolio';
import Features from 'containers/SaasAppCreative/Features';
import SystemMonitoring from 'containers/SaasAppCreative/SystemMonitoring';
import WorldMap from 'containers/SaasAppCreative/WorldMap';
import NewsFeed from 'containers/SaasAppCreative/NewsFeed';
import CallToAction from 'containers/SaasAppCreative/CallToAction';
import Footer from 'containers/SaasAppCreative/Footer';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/SaasAppCreative/saasAppCreative.style';
import 'animate.css';

const SaasAppCreative = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>SaaS App Creative | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@400;600&family=Manrope:wght@700&family=Noto+Serif+KR:wght@700;900&display=swap"
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
          <Clients />
          <HowItWorks />
          <AnalyticsTool />
          <Portfolio />
          <Features />
          <SystemMonitoring />
          <WorldMap />
          <NewsFeed />
          <CallToAction />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasAppCreative;
