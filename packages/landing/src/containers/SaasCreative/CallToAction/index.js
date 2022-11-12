import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowDropdown } from 'react-icons-kit/ionicons/androidArrowDropdown';
import Container from 'common/components/UI/Container';
import { Button, MenuItem } from 'react-aria-menubutton';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, { Content, DownloadButton, DownloadOptions } from './cta.style';

const menuItemWords = ['Download for MacOS', 'Download for Windows x64'];

const CallToAction = () => {
  const [downloadFor, setDownloadFor] = useState('Download for MacOS');
  const handleSelection = (value, event) => {
    console.log(value);
    setDownloadFor(value);
  };
  return (
    <Section>
      <Container>
        <Content>
          <Heading content="Start making business with our software" />
          <Text content="Best free time tracking software. It's a simple time tracker and time sheet app that lets you and your team track work hours" />
          <DownloadButton onSelection={handleSelection}>
            <Button className="MyMenuButton-button">
              {downloadFor}
              <Icon icon={androidArrowDropdown} />
            </Button>
            <DownloadOptions>
              <ul>
                {menuItemWords.map((word, i) => {
                  return (
                    <li key={i}>
                      <MenuItem className="MyMenuButton-menuItem">
                        {word}
                      </MenuItem>
                    </li>
                  );
                })}
              </ul>
            </DownloadOptions>
          </DownloadButton>
          <span>
            <Link href="#">2,500+ Upvote on ProductHunt</Link>
          </span>
        </Content>
      </Container>
    </Section>
  );
};

export default CallToAction;
