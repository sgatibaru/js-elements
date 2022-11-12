import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import A from 'common/components/Link';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { footerTop } from 'common/data/AppCreative2';
import Link from 'next/link';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { paperPlane } from 'react-icons-kit/fa/paperPlane';
import { ic_phone } from 'react-icons-kit/md/ic_phone';
import { ic_place } from 'react-icons-kit/md/ic_place';
import {
    AboutUs, ContactInfo, FooterWidget, Grid, InfoItem
} from './footer.style';

const FooterTop = (props) => {
    const { about, widgets, contactInfo } = footerTop || {};
    return (
        <Container {...props}>
            <Grid>
                <AboutUs>
                    <Link href="/">
                        <a><Image src={about?.logo?.src} alt="Web App Creative" /></a>
                    </Link>
                    <Text content={about?.text} />
                </AboutUs>
                {widgets?.length ? widgets?.map((item) => (
                    <FooterWidget key={item?.id}>
                        <h4>{item?.title}</h4>
                        {item?.list?.length ?
                        <ul>
                            {item?.list?.map((item) => (
                            <li className="widgetListItem" key={item.id}>
                                <A href={item?.link}>{item?.title}</A>
                            </li>
                            ))}
                        </ul>
                        :
                        ""
                        }
                    </FooterWidget>
                ))
                :
                ""
                }
                <ContactInfo>
                    <Heading as="h4" content={contactInfo?.title} />
                    <InfoItem>
                        <Icon icon={ic_place} size={24} />
                        <Text content={contactInfo?.address} />
                    </InfoItem>
                    <InfoItem>
                        <Icon icon={ic_phone} size={26} className="phone-icon" />
                        <div>
                            <Text
                                className="phone-number"
                                content={contactInfo?.phone}
                            />
                            <Text content={contactInfo?.openingTime} />
                        </div>
                    </InfoItem>
                    <InfoItem>
                        <Icon icon={paperPlane} size={22} />
                        <Text content={contactInfo?.email} />
                    </InfoItem>
                </ContactInfo>
            </Grid>
        </Container>
    );
};

export default FooterTop;
