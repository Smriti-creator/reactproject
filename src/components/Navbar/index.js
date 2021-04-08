import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Smriti</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="About">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Signup">Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/signin"> Signin</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
