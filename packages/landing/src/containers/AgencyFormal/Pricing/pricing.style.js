import styled from "styled-components";
import { rgba } from "polished";
import { themeGet } from "@styled-system/theme-get";

export const Section = styled.div`
	background: linear-gradient(
		180deg,
		rgba(240, 245, 251, 0.6) 0%,
		rgba(249, 250, 252, 0) 100%
	);
	padding-top: 70px;
	padding-bottom: 130px;
	@media screen and (max-width: 1024px) {
		padding-top: 50px;
		padding-bottom: 110px;
	}
	@media screen and (max-width: 768px) {
		padding-top: 40px;
		padding-bottom: 60px;
	}
	@media screen and (max-width: 480px) {
		padding-bottom: 60px;
		padding-top: 40px;
	}
`;

export const SectionHeading = styled.div`
	max-width: 580px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	margin-bottom: 25px;
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

export const ButtonGroup = styled.div`
	display: flex;
	align-items: center;
	max-width: 320px;
	padding: 6px;
	margin: 0 auto 50px;
	border-radius: 5px;
	background-color: ${themeGet("colors.inactiveField")};

	button {
		border: 0;
		padding: 15px 26px;
		border-radius: 5px;
		color: rgba(15, 33, 55, 0.5);
		font-size: 16px;
		line-height: 24px;
		font-weight: 700;
		background-color: transparent;
		cursor: pointer;
		width: 100%;
		@media only screen and (max-width: 480px) {
			font-size: 15px;
		}

		&.active {
			color: ${themeGet("colors.headingColor", "#0f2137")};
			background-color: ${themeGet("colors.white", "#ffffff")};
			box-shadow: 0 3px 4px
				${themeGet("colors.shadow", "rgba(38, 78, 118, 0.1)")};
		}
	}
`;

export const Grid = styled.div`
	gap: 35px;
	display: grid;
	grid-template-columns: repeat(3, 360px);
	justify-content: center;
	@media screen and (min-width: 1025px) and (max-width: 1200px) {
		gap: 25px;
		grid-template-columns: repeat(3, 310px);
	}
	@media screen and (max-width: 1024px) {
		gap: 20px;
		grid-template-columns: repeat(3, 1fr);
	}
	@media screen and (max-width: 480px) {
		grid-template-columns: 1fr;
		gap: 40px;
	}
`;

export const PriceTable = styled.div`
	// background-color: ${rgba("#fff", 0.06)};
	// color: ${themeGet("colors.white")};
	// box-shadow: 0px 25px 70px rgba(64, 106, 157, 0.06);
	// border-radius: 30px;
	padding: 45px 85px;
	text-align: center;
	@media (max-width: 1024px) {
		padding: 45px;
	}
	@media (max-width: 768px) {
		padding: 25px 14px;
		background-color: ${rgba("#fff", 0.4)};
		color: ${themeGet("colors.white")};
		box-shadow: 0px 25px 70px rgba(64, 106, 157, 0.06);
		border-radius: 30px;
	}
	@media (max-width: 480px) {
		padding: 35px 45px;
	}
	h2 {
		color: ${themeGet("colors.textPrimary")};
		font-family: "Poppins", sans-serif;
		font-weight: 700;
		font-size: 36px;
		line-height: 44px;
		letter-spacing: -0.16px;
		margin-bottom: 25px;
		@media (min-width: 567px) and (max-width: 768px) {
			font-size: 32px;
			margin-bottom: 15px;
		}
	}
	h5 {
		color: ${themeGet("colors.textPrimary")};
		font-weight: 700;
		font-size: 18px;
		line-height: 25px;
		margin-bottom: 10px;
	}
	p {
		color: ${themeGet("colors.textPrimary")};
		font-size: 15px;
		line-height: 1.67;
	}
	figure {
		margin: 40px 0 28px;
		min-height: 101px;
		display: flex;
		align-items: center;
		justify-content: center;
		@media (max-width: 768px) {
			min-height: auto;
			margin-top: 30px;
			img {
				max-height: 60px;
			}
		}
	}
	button {
		border-radius: 10px;
		font-weight: 700;
		font-size: 15px;
		line-height: 1.6;
		letter-spacing: -0.16px;
		@media (min-width: 567px) and (max-width: 768px) {
			font-size: 14px;
			padding: 10px;
			min-height: 40px;
		}
		@media (max-width: 480px) {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	}
	a {
		color: ${themeGet("colors.twitterColor")};
		font-size: 14px;
		line-height: 42px;
		font-weight: 700;
		margin-top: 15px;
		display: inline-flex;

		i {
			transition: all 0.3s ease-in-out;
		}
		&:hover i {
			margin-left: 7px;
		}
	}
	&.active {
		background-color: ${themeGet("colors.white")};
		box-shadow: 0px 25px 70px rgba(64, 106, 157, 0.06);
		border-radius: 50px;
		h2,
		h5 {
			color: ${themeGet("colors.headingColor")};
		}
		p {
			color: ${themeGet("colors.headingColor")};
		}
	}
`;
