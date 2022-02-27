import { React, useState } from "react";
import { Collapse, DropdownMenu, DropdownItem, Nav, NavbarToggler, NavItem, UncontrolledDropdown  } from "reactstrap";
import { CustDropdownToggle, CustNavbar, LogoImage, NavBrand, NavLink, OutsideNavLink } from "./NavigationElements" 
import Logo from "./Resources/Logo.png"
import resume from "./Resources/Resume.pdf"



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
                <NavBrand to ="/" className="ml-auto">
                    Spencer Thompson
                </NavBrand>
                <NavbarToggler onClick={toggle} className="me-2 ms-auto"/>
                <Collapse isOpen={isOpen} navbar className="text-align-center">
                    <Nav
                        className="container-fluid justify-content-center"
                        navbar
                    >
                        <NavItem>
                            <NavLink to = "/" className="ms-auto">
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
                            <NavLink to ="/contact">
                                Contact
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
                                        <NavLink to = "/web-examples">
                                            Web Dev Work
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <OutsideNavLink href={"https://github.com/SpenThompson"} target="_blank" rel="noopener noreferrer">
                                            Github
                                        </OutsideNavLink> 
                                    </DropdownItem>
                                    <DropdownItem>
                                        <OutsideNavLink href={resume} target="_blank" rel="noopener noreferrer">
                                            Resumé
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
                                    Other Projects
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
                    </Nav>
                </Collapse>
            </CustNavbar>
        </div>    
    )
}

export default Navigation;