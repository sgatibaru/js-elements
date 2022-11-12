import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SectionWrapper = styled.section`
	// min-height: 70vh;
	padding-bottom: 120px;

	@media only screen and (max-width: 768px) {
		padding-bottom: 50px;
	}
`;

export const SectionHeading = styled.div`
	max-width: 580px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	margin-bottom: 50px;
	h2 {
		color: ${themeGet("colors.primary")};
		font-family: Archivo;
		font-weight: 700;
		font-size: 16px;
		line-height: 35px;
		margin-bottom: 0;
		// letter-spacing: -0.2px;
	}
	.title {
		font-family: "Archivo";
		font-weight: 500;
		font-size: 24px;
		line-height: 50px;
		// letter-spacing: -0.2px;
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	.blog_post {
		flex: 0 0 calc(33.3333% - 20px);
		margin-right: 30px;
		&:last-child {
			margin-right: 0;
		}
		@media only screen and (max-width: 767px) {
			flex: 0 0 100%;
			margin-right: 0;
			margin-top: 40px;
		}
		img {
			max-width: 100%;
			border-radius: 10px;
		}
		h3 {
			margin-top: 20px;
			color: ${themeGet("colors.headingColor")};
			font-size: 20px;
			line-height: 30px;
		}
		p {
			font-size: 15px;
			line-height: 32px;
			color: ${themeGet("colors.textColor")};
		}
		.excerptLink {
			color: ${themeGet("colors.linkColor")};
			display: flex;
			align-items: center;
			font-weight: 500;
			font-size: 14px;
			line-height: 20px;
			i {
				margin-left: 2px;
				transition: 0.3s ease 0s;
			}
			&:hover i {
				margin-left: 5px;
			}
		}
	}
`;

export default SectionWrapper;
