import phone from 'common/assets/image/saasAppDark/phone.png';
import qrCode from 'common/assets/image/saasAppDark/qr-code.svg';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Section, {
  AppPreview, Content,
  CountryList, Grid, QrCode
} from './appDownload.style';




const AppDownload = () => {
  const [value, setValue] = useState();

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <Section id="download_app">
      <Container width="1300px">
        <Grid>
          <Content>
            <Heading content="We are available in both play store &amp; app store ✌️" />
            <Text content="There will be a day–in our lifetime–when we get to celebrate every person on the planet having access." />
            <CountryList>
              <PhoneInput
                placeholder="Phone number"
                international
                defaultCountry="CN"
                countryCallingCodeEditable={false}
                value={value}
                onChange={setValue}
              />
              <button type="button" onClick={handleSubmit}>
                Send
              </button>
            </CountryList>
            <QrCode>
              <img src={qrCode?.src} alt="qr code" />
              <span>Scan to download</span>
            </QrCode>
          </Content>
          <AppPreview>
            <NextImage src={phone} alt="phone mockup" />
          </AppPreview>
        </Grid>
      </Container>
    </Section>
  );
};

export default AppDownload;
