import React, { Fragment } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { DrawerProvider } from 'common/contexts/DrawerContext'
import Sticky from 'react-stickynode'
import { appBlackTheme } from 'common/theme/appBlack'
import ResetCSS from 'common/assets/css/style'
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/AppBlack/appBlack.style'

import Navbar from '../containers/AppBlack/Navbar'
import ScrollableSticky from '../containers/AppBlack/ScrollableSticky'
import Testimonials from '../containers/AppBlack/Testimonials'
import Banner from '../containers/AppBlack/Banner'
import ProductDelivery from '../containers/AppBlack/ProductDelivery'
import QualityFeatures from '../containers/AppBlack/QualityFeatures'
import Clients from '../containers/AppBlack/Clients'
import Footer from '../containers/AppBlack/Footer'
import Service from 'containers/AppBlack/Service'
import PricingPolicy from 'containers/AppBlack/PricingPolicy'
import CustomerSupport from 'containers/AppBlack/CustomerSupport'
import Subscription from 'containers/AppBlack/Subscription'
import Faq from 'containers/AppBlack/Faq'

const AppBlack = () => {
  return (
    <ThemeProvider theme={appBlackTheme}>
      <Fragment>
        <Head>
          <title>AppBlack | A react next landing page</title>
          <meta name='Description' content='React next landing page' />
          <meta name='theme-color' content='#fff2d9' />
          {/* Load google fonts */}
          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass='sticky-nav-active'>
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ScrollableSticky>
            <Banner />
            <Service />
            <ProductDelivery />
          </ScrollableSticky>
          <QualityFeatures />
          <Clients />
          <Testimonials />
          <PricingPolicy />
          <CustomerSupport />
          <Faq />
          <Subscription />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  )
}
export default AppBlack
