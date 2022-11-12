import analytics from 'common/assets/image/appCreativeTwo/analytics.png';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Link from 'common/components/Link';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { analyticsTool } from 'common/data/AppCreative2';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/feather/check';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Fade from 'react-reveal/Fade';
import Section, { Content, Features, Figure, Grid } from './analytics.style';


const AnalyticsTool = () => {
  return (
    <Section>
      <Container width="1400px">
        <Grid>
          <Figure>
            <Fade up>
              <NextImage src={analytics} alt="analytics" />
            </Fade>
          </Figure>
          <Content>
            <Text className="subtitle" content={analyticsTool?.slogan} />
            <Heading content={analyticsTool?.title} />
            <Text className="description" content={analyticsTool?.desc} />
            {analyticsTool?.features?.length > 0 ?
              <Features>
                {analyticsTool?.features?.map((feat, i) => (
                  <li key={i}>
                    <Icon icon={check} size={22} />
                    {feat}
                  </li>
                ))}
              </Features>
              :
              ""
            }
            <Link href={analyticsTool?.button?.link} className="explore">
              <Button
                title={analyticsTool?.button?.label}
                icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}
              />
            </Link>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AnalyticsTool;
