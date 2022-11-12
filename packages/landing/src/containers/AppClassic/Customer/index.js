import React from 'react';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import CustomerWrapper, { ImageWrapper } from './customer.style';

import { client } from 'common/data/AppClassic';

const Customer = () => {
  return (
    <CustomerWrapper>
      <Text content="Trusted by companies like:" />
      <ImageWrapper>
        {client.map((item) => (
          <NextImage
            key={`client-key${item.id}`}
            src={item.image}
            alt={item.title}
          />
        ))}
      </ImageWrapper>
    </CustomerWrapper>
  );
};

export default Customer;
