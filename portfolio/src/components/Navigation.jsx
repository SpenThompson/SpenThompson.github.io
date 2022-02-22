import React from "react";
import { Collapse, DropdownMenu, DropdownItem, Nav, NavbarToggler, NavItem, UncontrolledDropdown  } from "reactstrap";
import { CustDropdownToggle, CustNavbar, LogoImage, NavBrand, NavLink, OutsideNavLink } from "./NavigationElements" 
import Logo from "./Resources/Logo.png"


function Navigation(props) {
    return(
        <div>
           <CustNavbar
             style = {{backgroundColor: "#190B2A"}}
             expand= "md"
             fixed= "top"
             container
             dark
            >
                <NavBrand to ="/">
                    <LogoImage src={Logo}/>
                    Spencer Thompson
                </NavBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav
                        className="container-fluid me-auto"
                        navbar
                        
                    >
                        <NavItem className="ms-auto">
                            <NavLink to = "/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to ="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to ="/blog">
                                Blog
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <CustDropdownToggle
                                    caret
                                    nav
                                > 
                                    Portfolio
                                </CustDropdownToggle>
                                <DropdownMenu style = {{backgroundColor: "#190B2A"}} dark >
                                    <DropdownItem>
                                        <NavLink to = "/app-examples">
                                            Application Examples
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <OutsideNavLink href={"https://github.com/SpenThompson"} target="_blank" rel="noopener noreferrer">
                                            Github
                                        </OutsideNavLink> 
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <NavLink to ="/contact">
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </CustNavbar>
        </div>    
    )
}

export default Navigation;