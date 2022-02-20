import React from "react";
import { Collapse, DropdownToggle, DropdownMenu, DropdownItem, Nav, Navbar, NavbarToggler, NavItem, UncontrolledDropdown  } from "reactstrap";
import { NavBrand, NavLink } from "./NavigationElements" 


function Navigation(props) {
    return(
        <div>
           <Navbar
             style = {{backgroundColor: "#190B2A"}}
             expand= "lg"
             fixed= "top"
             container
             dark
             full
            >
                <NavBrand to ="/">
                    Spencer Thompson
                </NavBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink to = "/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to ="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            > 
                                Portfolio
                            </DropdownToggle>
                            <DropdownItem>
                                <NavLink to = "/app-examples">
                                    Application Examples
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to = "/github">
                                    Github
                                </NavLink> 
                            </DropdownItem>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>    
    )
}

export default Navigation;