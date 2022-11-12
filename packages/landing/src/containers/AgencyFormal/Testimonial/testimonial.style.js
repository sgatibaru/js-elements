import { rgba } from "polished";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Section = styled.section`
	background: #ffffff;
	padding: 70px 0 120px;
	@media only screen and (max-width: 768px) {
		padding: 50px 0 60px;
	}
`;

export const SectionHeading = styled.div`
	max-width: 585px;
	margin: 0 auto 80px;
	text-align: center;
	h2 {
		font-weight: 700;
		font-size: 16px;
		font-family: Archivo;
		// line-height: 1.33;
		// letter-spacing: -0.04em;
		color: ${themeGet("colors.primary")};
		// margin-bottom: 20px;
	}
	p {
		color: ${themeGet("colors.headingColor")};
		font-family: Archivo;
		font-weight: 500;
		font-size: 24px;
		line-height: 35px;
		margin: 0 auto;
		max-width: 490px;
		@media only screen and (max-width: 1200px) {
			font-size: 30px;
		}
		@media only screen and (max-width: 480px) {
			font-size: 24px;
		}
	}
`;

export const ContentWrapper = styled.div`
	.swiper-pagination {
		position: static;
		margin-top: 30px;
	}
	.swiper-pagination-bullet {
		background-color: ${rgba("#6720DF", 0.2)};
		border-radius: 10px;
		height: 8px;
		opacity: 1;
		width: 13px;
		transition: 0.3s ease-in-out 0s;
	}
	.swiper-pagination-bullet-active {
		background-color: ${themeGet("colors.primary")};
		width: 20px;
	}
	.swiper {
		overflow: visible;
	}
`;

export const Item = styled.div`
	background: #ffffff;
	border-radius: 12px;
	box-sizing: border-box;
	padding: 20px 40px 15px;
	box-shadow: 0px 25px 70px rgba(75, 102, 135, 0.07);
	@media only screen and (max-width: 768px) {
		padding: 11px 30px 35px;
	}
	.author-info {
		display: flex;
		flex-direction: column;
		margin-bottom: 25px;

		p {
			margin: 0;
		}

		.rating,
		.title {
			margin-top: 10px;
		}

		.title {
			color: ${themeGet("colors.textColor")};
			font-size: 20px;
			line-height: 33px;
		}
	}
	.info {
		margin-top: 20px;

		h4 {
			margin: 0;
		}

		.photo {
			margin-right: 15px;
		}

		.twitter-text {
			color: ${themeGet("colors.twitterColor")};
			font-family: "DM Sans";
			font-weight: 500;
			font-size: 14px;
		}
	}
	blockquote {
		font-style: italic;
		font-size: 18px;
		line-height: 1.68;
		color: ${rgba("#19191b", 0.7)};
		margin: 0;
		@media only screen and (max-width: 768px) {
			font-size: 16px;
		}
	}
`;
