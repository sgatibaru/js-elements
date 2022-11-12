import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { COMPANY_DATA } from 'common/data/WebApp';
import Image from 'next/image';
import React from 'react';
import ClientsArea from './clients.style';

const Clients = () => {
  const { title, images } = COMPANY_DATA;
  return (
    <ClientsArea>
      <Container>
        <Heading as="h4" content={title} />
        <Box className="imageWrap">
          {images?.map(({ src }, index) => (
            <div className='client-image-wrapper' key={`client-image-key-${index}`}>
              <Image src={src} alt="" />
            </div>
          ))}
        </Box>
      </Container>
    </ClientsArea>
  );
};

export default Clients;
