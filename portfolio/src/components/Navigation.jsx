import { React, useState } from "react";
import { Collapse, DropdownMenu, DropdownItem, Nav, NavbarToggler, NavItem, UncontrolledDropdown  } from "reactstrap";
import { CustDropdownToggle, CustNavbar, LogoImage, NavBrand, NavLink, OutsideNavLink } from "./NavigationElements" 
import Logo from "./Resources/Logo.png"



function Navigation(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
           <CustNavbar
             style = {{backgroundColor: "#190B2A"}}
             expand= "md"
             fixed= "top"
             container
             dark
            >
                <LogoImage src={Logo}/>
                <NavBrand to ="/">
                    Spencer Thompson
                </NavBrand>
                <NavbarToggler onClick={toggle} className="me-2 ms-auto"/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="container-fluid"
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
                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <CustDropdownToggle
                                    caret
                                    nav
                                >
                                    Other Work
                                </CustDropdownToggle>
                                <DropdownMenu style = {{backgroundColor: "#190B2A"}} dark>
                                    <DropdownItem>
                                        <NavLink to = "/essays">
                                            Film and Essays
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to = "/podcasts">
                                            Podcasts
                                        </NavLink>
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