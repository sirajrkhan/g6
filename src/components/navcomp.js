import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar light color={props.mytheme} expand="md">
      {console.log(Navbar)}
        <NavbarBrand href="/">Company Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/sirajrkhan/">Siraj's GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Best Selling
                </DropdownItem>
                <DropdownItem>
                  New Arrivals
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Deals of the day
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>About</NavbarText>
        </Collapse>
      </Navbar>
  );
}

export default Navi;