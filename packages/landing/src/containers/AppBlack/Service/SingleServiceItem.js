import Box from 'common/components/Box'
import NextImage from 'common/components/NextImage'
import Text from 'common/components/Text'
import React from 'react'
import styled from 'styled-components'

const SingleServiceWrapper = styled.div`
  margin-bottom: 59px;
  .service-icon {
    background-color: rgba(0, 0, 0, 0.06);
    width: 120px;
    height: 120px;
    border-radius: 40px;

    @media (max-width: 1550px) {
      width: 100px;
      height: 100px;
    }
    @media (max-width: 1199px) {
      width: 80px;
      height: 80px;
    }
    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-top: 20px;
    color: #0f2137;
  }
`

function SingleServiceItem({ data }) {
  const { icon, title } = data

  return (
    <SingleServiceWrapper>
      <Box
        className='single-service-item'
        flexBox
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          className='service-icon'
          flexBox
          justifyContent='center'
          alignItems='center'
        >
          <NextImage src={icon} alt='' />
        </Box>

        <Text as='p' textAlign='center' className='paragraph' content={title} />
      </Box>
    </SingleServiceWrapper>
  )
}

export default SingleServiceItem
