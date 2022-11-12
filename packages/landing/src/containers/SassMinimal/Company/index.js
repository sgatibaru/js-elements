import React from 'react';
import NextImage from 'common/components/NextImage';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';

import { CompanyWrapper } from './company.style';

import { COMPANY_DATA } from 'common/data/SassMinimal';

const Company = () => {
  return (
    <CompanyWrapper>
      <Container>
        {COMPANY_DATA.map((company, index) => (
          <Box key={`company-box-${index}`}>
            <NextImage src={company.image} alt="Client Image" />
          </Box>
        ))}
      </Container>
    </CompanyWrapper>
  );
};

export default Company;
