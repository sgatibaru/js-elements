import React from "react";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import FeatureBlock from "common/components/FeatureBlock";
import Container from "common/components/UI/ContainerTwo";
import Text from "common/components/Text";
import Link from "common/components/Link";
import NextImage from "common/components/NextImage";
import Heading from "common/components/Heading";
import SectionWrapper, {
	SectionTitle,
	FeatureWrapper,
	TitleTag,
} from "./ultimateFeature.style";
import data from "common/data/AgencyFormal";

const UltimateFeature = () => {
	const isTab = useMediaQuery({ minWidth: 625, maxWidth: 768 });

	return (
		<SectionWrapper>
			<Container>
				<SectionTitle>
					<Zoom>
						<Heading content="Product features" />
						<Text content="Ultimate features that works" />
					</Zoom>
				</SectionTitle>

				<FeatureWrapper>
					{data.features.map((feature, index) => (
						<FeatureBlock
							key={index}
							icon={
								<Fade up delay={130 * feature.id}>
									<NextImage src={feature.icon} alt={feature.title} />
								</Fade>
							}
							iconPosition={isTab ? "up" : "left"}
							title={
								<Fade up delay={130 * feature.id}>
									<TitleTag>
										<Heading as="h4" content={feature.title} />
										{feature.tag ? (
											<Text className="badge" content={feature.tag} />
										) : null}
									</TitleTag>
								</Fade>
							}
							description={
								<React.Fragment>
									<Fade up delay={130 * feature.id}>
										<Text content={feature.desc} />
										<Link href="#" className="learn__more">
											Buy Now <Icon icon={chevronRight} />
										</Link>
									</Fade>
								</React.Fragment>
							}
							className="ultimateFeature"
						/>
					))}
				</FeatureWrapper>
			</Container>
		</SectionWrapper>
	);
};

UltimateFeature.propTypes = {
	row: PropTypes.object,
	col: PropTypes.object,
};

UltimateFeature.defaultProps = {
	row: {
		flexBox: true,
		flexWrap: "wrap",
		ml: ["-30px", "-30px", "-30px", "-25px", "-30px"],
		mr: ["-30px", "-30px", "-30px", "-25px", "-45px"],
	},
	col: {
		width: [1, 1 / 2, 1 / 2, 1 / 3],
	},
};

export default UltimateFeature;
