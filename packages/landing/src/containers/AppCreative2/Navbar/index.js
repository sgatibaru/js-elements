import lockImage from 'common/assets/image/appCreativeTwo/icons/lock.png';
import logoImage from 'common/assets/image/appCreativeTwo/logo.png';
import Box from 'common/components/Box';
import Drawer from 'common/components/Drawer';
import HamburgMenu from 'common/components/HamburgMenu';
import Image from 'common/components/Image';
import NavbarWrapper from 'common/components/Navbar';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Container from 'common/components/UI/Container';
import Logo from 'common/components/UIElements/Logo';
import { DrawerContext } from 'common/contexts/DrawerContext';
import { menu_items } from 'common/data/AppCreative2';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';



const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container width="1400px">
        <Box {...row}>
          <Logo
            href="/"
            logoSrc={logoImage}
            title="SaaS Creative"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Box {...menuWrapper} className="mainMenuWrapper">
            <ScrollSpyMenu
              className="main_menu"
              menuItems={menu_items}
              offset={-70}
            />
            <Link href="#">
              <a className="navbar_button navbar_button_one">
                <Image src={lockImage.src} alt="Login Now" />
                Login Now
              </a>
            </Link>
            <Link href="#">
              <a className="navbar_button navbar_button_two">
                Join Free
              </a>
            </Link>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#108AFF" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={menu_items}
                drawerClose={true}
                offset={-100}
              />
              <div className='mobile-menu-drawer-bottom'>
                <Link href="#">
                  <a className="navbar_button navbar_button_one">
                    <Image src={lockImage.src} alt="Login Now" />
                    Login Now
                  </a>
                </Link>
                <Link href="#">
                  <a className="navbar_button navbar_button_two">
                    Join Free
                  </a>
                </Link>
              </div>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'app_creative_two_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['148px', '148px'],
  },
  button: {},
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
