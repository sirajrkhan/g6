import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const FooterComp = (props) => {
  return (
    <div>
        <hr/>
      <Nav>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Privacy</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Parent Group</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Careers</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
}

export default FooterComp;