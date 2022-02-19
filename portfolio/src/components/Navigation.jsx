import React from "react";
import { Collapse, Nav, Navbar, NavItem } from "reactstrap";
import { NavBrand, NavLink } from "./NavigationElements"

function Navigation(props) {
    return(
        <div>
            <Navbar 
                color="190B2A"
                expand="md"
                dark
            >
                <NavBrand href="/">
                    Spencer Thompson
                </NavBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink to ="/about">
                                About
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>    
    )
}

export default Navigation;