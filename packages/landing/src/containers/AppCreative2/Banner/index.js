import bannerImage from 'common/assets/image/appCreativeTwo/banner_image.png';
import arrowIcon from 'common/assets/image/appCreativeTwo/icons/arrow.png';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import { bannerData } from 'common/data/AppCreative2';
import Link from 'next/link';
import React from 'react';
import Section, {
    BannerContent, BannerContentWrapper, BannerText, Figure,
    HighlightedText
} from './banner.style';




const Banner = () => {
    const { title, text, button, news, newsLabel } = bannerData;
    return (
        <Section id="home">
            <Container width="1400px">
                <BannerContentWrapper>
                    <BannerContent>
                        <HighlightedText>
                            <strong>{news}</strong>
                            {newsLabel}
                            <Image src={arrowIcon?.src} alt={newsLabel} />
                        </HighlightedText>
                        <Heading
                        className="animate__animated animate__fadeInUp banner-title"
                        content={title}
                        />
                        <BannerText>
                            <div className="animate__animated animate__fadeInUp">
                                {text}
                            </div>
                        </BannerText>
                        {button.length > 0 ?
                        <Box as="div" className="button-group">
                            {button?.map((item, index) => {
                                return (
                                    <Link href={item?.link} key={index}>
                                        <a target="_blank"><Image src={item?.thumb?.src} alt={item?.title} /></a>
                                    </Link>
                                )
                            })}
                        </Box>
                        : ""}
                    </BannerContent>
                    <Figure className="animate__animated animate__fadeInUp animate__fast">
                        <NextImage src={bannerImage} alt="dashboard" />
                    </Figure>
                </BannerContentWrapper>
            </Container>
        </Section>
    );
};

export default Banner;
