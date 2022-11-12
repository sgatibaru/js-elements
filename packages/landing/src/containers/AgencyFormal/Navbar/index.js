import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import ScrollSpyMenu from "common/components/ScrollSpyMenu";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Icon } from "react-icons-kit";
import { androidMenu } from "react-icons-kit/ionicons/androidMenu";
import { androidClose } from "react-icons-kit/ionicons/androidClose";
import Logo from "common/components/UIElements/Logo";
import Button from "common/components/Button";
import Container from "common/components/UI/ContainerTwo";
import Header, {
	LogoContainer,
	NavbarWrapper,
	MobileMenu,
} from "./navbar.style";
import LogoImage from "common/assets/image/agencyFormal/logo.png";

import data from "common/data/AgencyFormal";

const Navbar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	const scrollItems = data.navItems
		.filter((item) => item.path)
		.map((item) => item.path.slice(1));

	const handleMobileMenu = () => {
		setMobileMenu(!mobileMenu);
	};

	const handleMenuClose = () => {
		setMobileMenu(false);
	};

	return (
		<Header className="agencyFormal-navbar navbar">
			<Container>
				<LogoContainer className="logo-container">
					<Logo
						href="/agencyformal"
						logoSrc={LogoImage}
						title="Agency Formal"
						className="logo"
					/>
				</LogoContainer>
				{/* end of logo */}

				<NavbarWrapper>
					<ScrollSpyMenu
						className="menu-items menu-left"
						menuItems={data.navItems}
						offset={-84}
					/>
					{/* end of main menu */}

					<Button
						className="menubar"
						icon={
							mobileMenu ? (
								<Icon className="bar" size={32} icon={androidClose} />
							) : (
								<Icon className="close" icon={androidMenu} size={32} />
							)
						}
						color="#0F2137"
						variant="textButton"
						onClick={handleMobileMenu}
					/>
				</NavbarWrapper>
			</Container>

			{/* start mobile menu */}
			<MobileMenu className={`mobile-menu ${mobileMenu ? "active" : ""}`}>
				<Container>
					<Scrollspy
						className="menu"
						items={scrollItems}
						offset={-84}
						currentClassName="active"
					>
						{data.navItems.map((menu, index) => (
							<li key={`menu_key${index}`}>
								<AnchorLink
									href={menu.path}
									offset={menu.offset}
									onClick={handleMenuClose}
								>
									{menu.label}
								</AnchorLink>
							</li>
						))}
					</Scrollspy>
				</Container>
			</MobileMenu>
			{/* end of mobile menu */}
		</Header>
	);
};

export default Navbar;
