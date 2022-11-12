import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { PriceColumn } from './pricing.style';

const PriceCard = ({ priceTable, isMonthly, ...rest }) => {
  return (
    <PriceColumn
      className={
        priceTable.isActive
          ? 'active animate__animated animate__fadeInUp'
          : 'animate__animated animate__fadeInUp'
      }
      {...rest}
    >
      <Heading
        content={`${priceTable.currencySymbol}${
          isMonthly ? priceTable.price.monthly : priceTable.price.annual
        }`}
      />
      <Heading as="h5" content={priceTable.title} />
      <Text content={priceTable.desc} />
      <figure>
        <Image src={priceTable.icon?.src} alt={priceTable.title} />
      </figure>
      <Button title={priceTable.button.label} />
      <div>
        <a className="link" href={priceTable.details.link}>
          {priceTable.details.label}{' '}
          <Icon size={20} icon={ic_keyboard_arrow_right} />
        </a>
      </div>
    </PriceColumn>
  );
};

export default PriceCard;
