import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";

import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import Image from "common/components/Image";
import Text from "common/components/Text";

import data from "common/data/AgencyFormal";
import {
	Section,
	SectionHeading,
	ButtonGroup,
	Grid,
	PriceTable,
} from "./pricing.style";

const Pricing = () => {
	const [isMonthly, setIsMonthly] = useState(true);
	const [hoverActive, setHoverActive] = useState(2);
	const pricing = data.pricing;

	const handleToggle = () => {
		setIsMonthly(!isMonthly);
	};

	return (
		<Section>
			<Container width="1400px">
				<SectionHeading>
					<Zoom>
						<Heading as="h2" content="Meet Pricing Plan" />
						<Text className="title" content="Meet our awesome pricing plan" />
					</Zoom>
				</SectionHeading>

				<ButtonGroup>
					<Zoom>
						<button
							className={isMonthly ? "active" : ""}
							type="button"
							onClick={handleToggle}
						>
							Monthly Plan
						</button>
						<button
							className={!isMonthly ? "active" : ""}
							type="button"
							onClick={handleToggle}
						>
							Annual Plan
						</button>
					</Zoom>
				</ButtonGroup>

				<Grid>
					{pricing.map((priceTable) => (
						<Fade key={priceTable.id} up delay={priceTable.id * 100}>
							<PriceTable
								className={
									hoverActive === priceTable.id
										? "active animate__animated animate__fadeInUp"
										: "animate__animated animate__fadeInUp"
								}
								onMouseOver={() => setHoverActive(priceTable.id)}
							>
								<Heading
									content={`${priceTable.currencySymbol}${
										isMonthly
											? priceTable.price.monthly
											: priceTable.price.annual
									}`}
								/>
								<Heading as="h5" content={priceTable.title} />
								<Text content={priceTable.desc} />
								<figure>
									<Image src={priceTable.icon?.src} alt={priceTable.title} />
								</figure>
								<Button title={priceTable.button.label} />
								<a className="link" href={priceTable.details.link}>
									{priceTable.details.label}
									<Icon size={20} icon={ic_keyboard_arrow_right} />
								</a>
							</PriceTable>
						</Fade>
					))}
				</Grid>
			</Container>
		</Section>
	);
};

export default Pricing;
