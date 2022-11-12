import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Switch from 'common/components/Switch';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import {
  MONTHLY_PRICING_DATA,
  YEARLY_PRICING_DATA
} from 'common/data/WebApp';
import Link from 'next/link';
import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import { androidDone } from 'react-icons-kit/ionicons/androidDone';
import PricingArea, {
  CardBody,
  CardFooter, CardTop, Col,
  PriceCard, PricingAmount, Row, TopHeading
} from './pricing.style';


const Pricing = () => {
  const [state, setState] = useState({
    toggle: true,
  });

  const dataHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  return (
    <PricingArea id="pricing_section">
      <Container className="Container">
        <TopHeading>
          <Heading as="h2" content="Meet our exiciting Pricing Plan" />
        </TopHeading>
        <Box className="priceFilter">
          <span>Monthly</span>
          <Switch
            switchColor="#fff"
            labelText=""
            labelPosition="left"
            onChange={dataHandle}
          />
          <span>Yearly</span>
        </Box>
        {state.toggle === false && (
          <Row>
            {YEARLY_PRICING_DATA?.map(
              (
                {
                  recommended,
                  title,
                  price,
                  tagline,
                  planLabel,
                  options,
                  button,
                },
                index
              ) => (
                <Col key={`pricing-card-key-${index}`}>
                  <PriceCard
                    className={recommended === true ? 'recommended' : ' '}
                  >
                    <CardTop className="cardTop">
                      <Heading as="h3" content={title} />
                      <PricingAmount>
                        <Heading as="h4" content={price} />
                        <Text as="p" content={tagline} />
                      </PricingAmount>
                    </CardTop>
                    <CardBody>
                      <Text
                        as="span"
                        className="pricingLabel"
                        content={planLabel}
                      />
                      <ul className="priceList">
                        {options?.map(({ text }, index) => (
                          <li key={`priceList-key-${index}`}>
                            <Icon size={20} icon={androidDone} />
                            {text}
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                    <CardFooter className="cardFooter">
                      <Link href={button?.link}>
                        <a className="priceBtn">
                          <span>
                            {button?.label}{' '}
                            <Icon size={18} icon={androidArrowForward} />
                          </span>
                        </a>
                      </Link>
                    </CardFooter>
                  </PriceCard>
                </Col>
              )
            )}
          </Row>
        )}
        {state.toggle === true && (
          <Row>
            {MONTHLY_PRICING_DATA?.map(
              (
                {
                  recommended,
                  title,
                  price,
                  tagline,
                  planLabel,
                  options,
                  button,
                },
                index
              ) => (
                <Col key={`pricing-card-key-${index}`}>
                  <PriceCard
                    className={recommended === true ? 'recommended' : ' '}
                  >
                    <CardTop>
                      <Heading as="h3" content={title} />
                      <PricingAmount>
                        <Heading as="h4" content={price} />
                        <Text as="p" content={tagline} />
                      </PricingAmount>
                    </CardTop>
                    <CardBody>
                      <Text
                        as="span"
                        className="pricingLabel"
                        content={planLabel}
                      />
                      <ul className="priceList">
                        {options?.map(({ text }, index) => (
                          <li key={`priceList-key-${index}`}>
                            <Icon size={20} icon={androidDone} />
                            {text}
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Link href={button?.link}>
                        <a className="priceBtn">
                          <span>
                            {button?.label}{' '}
                            <Icon size={18} icon={androidArrowForward} />
                          </span>
                        </a>
                      </Link>
                    </CardFooter>
                  </PriceCard>
                </Col>
              )
            )}
          </Row>
        )}
      </Container>
    </PricingArea>
  );
};

export default Pricing;
