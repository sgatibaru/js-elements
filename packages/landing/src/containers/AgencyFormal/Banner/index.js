import React from "react";
import Container from "common/components/UI/ContainerTwo";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Input from "common/components/Input";
import BannerWrapper, {
	BannerContent,
	Subscribe,
	SponsoredBy,
	ImageGroup,
} from "./banner.style";

import paypal from "common/assets/image/agencyFormal/paypal.png";
import google from "common/assets/image/agencyFormal/google.png";
import dropbox from "common/assets/image/agencyFormal/dropbox.png";

const Banner = () => {
	return (
		<BannerWrapper id="home">
			<Container>
				<BannerContent>
					<Heading as="h1" content="A creative way to grow your startup" />

					<Text
						className="banner-caption"
						content="Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever."
					/>

					<Subscribe>
						<Input
							inputType="email"
							placeholder="Enter Email Address"
							iconPosition="left"
							aria-label="email"
						/>
						<Button title="Get Started" type="submit" />
					</Subscribe>

					<SponsoredBy>
						<Text className="sponsoredBy" content="Our Clients" />
						<ImageGroup>
							<NextImage src={paypal} alt="Paypal" />
							<NextImage src={google} alt="Google" />
							<NextImage src={dropbox} alt="Dropbox" />
						</ImageGroup>
					</SponsoredBy>
				</BannerContent>
			</Container>
		</BannerWrapper>
	);
};

export default Banner;
