import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { CUSTOMER_SUPPORT_DATA } from 'common/data/WebApp';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import { androidDone } from 'react-icons-kit/ionicons/androidDone';
import CustomerSupportArea, { Row } from './customerSupport.style';
const CustomerSupport = () => {
  const { image, shapeImage, title, options, button } = CUSTOMER_SUPPORT_DATA;
  return (
    <CustomerSupportArea>
      <Container>
        <Box className="blockTitle">
          <Heading as="h2" content={title} />
        </Box>
        <Row>
          <Box className="image">
            <Image src={image} alt="customer support image" />
            <div className='shapeImage'>
              <Image
                src={shapeImage}
                alt="customer support"
              />
            </div>
          </Box>
          <Box className="content">
            <Box className="contentInner">
              <ul className="options">
                {options?.map(({ label }, index) => (
                  <li className="optionsItem" key={`option-key-${index}`}>
                    <Icon icon={androidDone} size={24} />
                    {label}
                  </li>
                ))}
              </ul>
              <Link href={button?.link}>
                <a className="button">
                  <span>
                    {button?.label}
                    <Icon icon={androidArrowForward} size={19} />
                  </span>
                </a>
              </Link>
            </Box>
          </Box>
        </Row>
      </Container>
    </CustomerSupportArea>
  );
};

export default CustomerSupport;
