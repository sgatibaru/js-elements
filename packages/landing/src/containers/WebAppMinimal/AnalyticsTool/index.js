import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/feather/check';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Section, { Grid, Figure, Content, Features } from './analytics.style';
import parallaxBg from 'common/assets/image/webAppMinimal/parallax-1.png';
import app from 'common/assets/image/webAppMinimal/app.png';

import { analyticsTool } from 'common/data/WebAppMinimal';

const AnalyticsTool = () => {
  return (
    <Section bgImage={parallaxBg?.src} bgImageAlt="the cat" strength={200}>
      <Container width="1400px">
        <Grid>
          <Figure>
            <Fade up>
              <NextImage src={app} alt="analytics" />
            </Fade>
          </Figure>
          <Content>
            <Text className="subtitle" content={analyticsTool.slogan} />
            <Heading content={analyticsTool.title} />
            <Text className="description" content={analyticsTool.desc} />
            <Features>
              {analyticsTool.features.map((feat, i) => (
                <li key={i}>
                  <Icon icon={check} size={22} />
                  {feat}
                </li>
              ))}
            </Features>
            <Link href={analyticsTool.button.link} className="explore">
              <Button
                title={analyticsTool.button.label}
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
