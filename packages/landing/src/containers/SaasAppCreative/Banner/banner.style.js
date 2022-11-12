import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
	position: relative;
	z-index: 0;
	padding-bottom: 40px;
	@media (max-width: 767px) {
		padding-bottom: 30px;
	}
`;
export default Section;

export const BannerContentWrapper = styled.div`
	@media (min-width: 1280px) {
		min-height: 100vh;
	}
`;

export const BannerContent = styled.div`
	padding-top: 230px;
	max-width: 915px;
	margin: 0 auto;
	text-align: center;
	@media (max-width: 1600px) {
		padding-top: 200px;
	}
	@media (max-width: 1440px) {
		padding-top: 190px;
		max-width: 910px;
	}
	@media (max-width: 1366px) {
		max-width: 800px;
	}
	@media (max-width: 1280px) {
		max-width: 650px;
	}
	@media (max-width: 1024px) {
		max-width: 700px;
	}
	@media (max-width: 768px) {
		max-width: 550px;
		padding-top: 130px;
	}
	@media (max-width: 480px) {
		padding-top: 115px;
	}
	h2 {
		font-family: 'Noto Serif KR', serif;
		font-size: 54px;
		font-weight: 700;
		line-height: 1.52;
		text-align: center;
		margin: 0 0 17px;
		span {
			position: relative;
			&::before {
				content: '';
				position: absolute;
				bottom: -7px;
				width: 100%;
				height: 13px;
			}
		}
		@media (max-width: 1536px) {
			font-size: 44px;
		}
		@media (max-width: 1280px) {
			font-size: 36px;
		}
		@media (max-width: 1024px) {
			font-size: 40px;
		}
		@media (max-width: 768px) {
			font-size: 32px;
		}
		@media (max-width: 480px) {
			font-size: 24px;
		}
	}
	p {
		font-size: 18px;
		line-height: 2.11;
		max-width: 600px;
		margin: 0 auto;

		@media (max-width: 480px) {
			font-size: 14px;
			line-height: 1.6;
		}
	}
`;

export const Buttons = styled.div`
	gap: 15px;
	display: inline-grid;
	margin-top: 35px;
	grid-template-columns: repeat(2, 1fr);
	@media only screen and (min-width: 768px) {
		gap: 20px;
	}
	button {
		font-family: Inter, sans-serif;
		font-size: 14px;
		cursor: pointer;
		@media only screen and (min-width: 768px) {
			font-size: 16px;
		}
	}
	.button-one {
		border-radius: 60px;
		min-height: 50px;
		padding: 0 20px;
		@media only screen and (min-width: 768px) {
			min-height: 65px;
			padding: 0 25px;
		}
	}
	.button-two {
		background-color: transparent;
		border: 0;
		padding: 0;
		display: inline-flex;
		align-items: center;
		font-weight: 500;
		color: ${themeGet('colors.headingColor')};
		line-height: 22px;
		.play-icon {
			align-items: center;
			border: 1px solid ${themeGet('colors.borderColor')};
			display: inline-flex;
			height: 55px;
			width: 55px;
			border-radius: 50%;
			justify-content: center;
			margin-right: 15px;
			@media only screen and (max-width: 480px) {
				img {
					margin-left: 2px;
					width: 17px;
				}
			}
			@media only screen and (min-width: 768px) {
				height: 65px;
				width: 65px;
			}
		}
		.btn-txt {
			text-align: left;
		}
		.primary {
			color: ${themeGet('colors.primary')};
			display: block;
			font-weight: 600;
		}
	}
`;

export const Figure = styled.figure`
	display: grid;
	margin: 50px 0 0;
	position: relative;
	text-align: center;
	z-index: 1;
	> div {
		filter: drop-shadow(0px 4px 50px rgba(86, 99, 132, 0.1));
	}
	@media (min-width: 768px) {
		margin-top: 60px;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	@media (min-width: 1024px) {
		max-width: 720px;
		margin-top: 50px;
	}
	@media (min-width: 1366px) {
		max-width: 1040px;
	}
	@media (min-width: 1440px) {
		max-width: 90%;
	}
	@media (min-width: 1600px) {
		margin-top: 60px;
		max-width: 100%;
	}
	.banner-bubble {
		position: absolute;
		z-index: -1;
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
		max-width: 100px;
		@media only screen and (min-width: 768px) {
			max-width: 180px;
		}
		@media only screen and (min-width: 1366px) {
			max-width: 280px;
		}
		@media only screen and (min-width: 1900px) {
			max-width: 100%;
		}
	}
	.bubble-1 {
		top: 0;
		left: 0;
		&.active {
			top: 5px;
			left: -20px;
			@media only screen and (min-width: 768px) {
				top: 15px;
				left: -40px;
			}
			@media only screen and (min-width: 1024px) {
				top: 30px;
				left: -35px;
			}
			@media only screen and (min-width: 1280px) {
				top: 26px;
				left: -40px;
			}
			@media only screen and (min-width: 1366px) {
				top: 60px;
				left: -40px;
			}
			@media only screen and (min-width: 1440px) {
				top: 60px;
				left: -70px;
			}
			@media only screen and (min-width: 1536px) {
				top: 50px;
				left: -70px;
			}
			@media only screen and (min-width: 1600px) {
				top: 40px;
				left: -90px;
			}
		}
	}
	.bubble-2 {
		top: 0;
		right: 0;
		&.active {
			top: -15px;
			right: -10px;
			@media only screen and (min-width: 768px) {
				top: -30px;
				right: -10px;
			}
			@media only screen and (min-width: 1024px) {
				top: -25px;
				right: -15px;
			}
			@media only screen and (min-width: 1280px) {
				top: -25px;
				right: -10px;
			}
			@media only screen and (min-width: 1366px) {
				top: -25px;
				right: -15px;
			}
			@media only screen and (min-width: 1440px) {
				top: -45px;
				right: -20px;
			}
			@media only screen and (min-width: 1536px) {
				top: -50px;
				right: -14px;
			}
			@media only screen and (min-width: 1600px) {
				top: -60px;
				right: -20px;
			}
		}
	}
	.bubble-3 {
		right: 0;
		bottom: 0;
		&.active {
			right: -10px;
			bottom: -10px;
			@media only screen and (min-width: 768px) {
				right: -50px;
				bottom: -35px;
			}
			@media only screen and (min-width: 1024px) {
				right: -10px;
				bottom: -15px;
			}
			@media only screen and (min-width: 1280px) {
				right: -15px;
				bottom: -19px;
			}
			@media only screen and (min-width: 1366px) {
				right: -15px;
				bottom: -20px;
			}
			@media only screen and (min-width: 1440px) {
				right: -25px;
				bottom: -35px;
			}
			@media only screen and (min-width: 1536px) {
				right: -15px;
				bottom: -40px;
			}
			@media only screen and (min-width: 1600px) {
				right: -50px;
				bottom: -35px;
			}
		}
	}
`;

export const BubbleGroup = styled.div`
	position: relative;
`;

export const VideoWrapper = styled.div`
	max-width: 100%;
	position: relative;
	width: 900px;
	&:before {
		content: '';
		display: block;
		padding-top: 56.25%;
	}
	iframe {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
`;
