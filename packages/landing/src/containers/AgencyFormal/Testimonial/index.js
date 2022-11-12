import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "react-icons-kit";
import { androidStar } from "react-icons-kit/ionicons/androidStar";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import Container from "common/components/UI/Container";
import FeatureBlock from "common/components/FeatureBlock";
import Heading from "common/components/Heading";
import Image from "common/components/Image";
import Text from "common/components/Text";
import {
	Section,
	SectionHeading,
	ContentWrapper,
	Item,
} from "./testimonial.style";

import data from "common/data/AgencyFormal";

const options = {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		// when window width is >= 768px
		768: {
			slidesPerView: 2,
		},
	},
};

const ratingCount = (rating) => {
	let ratings = [];
	for (let i = 1; i <= rating; i++) {
		ratings.push(
			<Icon key={i} style={{ color: "#F6B716" }} icon={androidStar} />
		);
	}
	return ratings;
};

const Testimonial = () => {
	return (
		<Section id="supports">
			<Container>
				<SectionHeading>
					<Zoom>
						<Heading content="Client Testimonial" />
						<Text content="What customers say about us" />
					</Zoom>
				</SectionHeading>
				<ContentWrapper>
					<Fade up delay={100}>
						<Swiper {...options}>
							{data?.testimonials?.map((item) => (
								<SwiperSlide key={item.id}>
									<Item>
										<div className="author-info">
											<span className="rating">{ratingCount(item.rating)}</span>
											<Heading className="title" as="h3" content={item.title} />
											<blockquote>{item.text}</blockquote>
											<FeatureBlock
												key={`post_key-${item.id}`}
												id={`post_id-${item.id}`}
												className="info"
												icon={
													<Image
														className="photo"
														src={item.photo?.src}
														alt={item.name}
													/>
												}
												iconPosition="left"
												title={<Heading as="h4" content={item.name} />}
												description={
													<Text
														className="twitter-text"
														content={item.twitter}
													/>
												}
											/>
										</div>
									</Item>
								</SwiperSlide>
							))}
						</Swiper>
					</Fade>
				</ContentWrapper>
			</Container>
		</Section>
	);
};

export default Testimonial;
