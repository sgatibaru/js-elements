import React from "react";
import Link from "next/link";
import { Icon } from "react-icons-kit";
import { angleRight } from "react-icons-kit/fa/angleRight";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import Container from "common/components/UI/ContainerTwo";
import BlogPost from "common/components/BlogPost";
import Heading from "common/components/Heading";
import Text from "common/components/Text";

import SectionWrapper, { ContentWrapper, SectionHeading } from "./news.style";
import data from "common/data/AgencyFormal";

const NewsFeed = () => {
	const newsFeed = data.news;

	return (
		<SectionWrapper id="news">
			<Container>
				<SectionHeading>
					<Zoom>
						<Heading as="h2" content="Latest Newsfeed" />
						<Text
							className="title"
							content="Our recent blog post that updated"
						/>
					</Zoom>
				</SectionHeading>

				<Fade up delay="130">
					<ContentWrapper>
						{newsFeed.map((news) => (
							<BlogPost
								key={news.id}
								thumbUrl={news.image}
								title={news.title}
								excerpt={news.excerpt}
								link={
									<Link href={news.link}>
										<a className="excerptLink">
											Learn More <Icon icon={angleRight} />
										</a>
									</Link>
								}
							/>
						))}
					</ContentWrapper>
				</Fade>
			</Container>
		</SectionWrapper>
	);
};

export default NewsFeed;
