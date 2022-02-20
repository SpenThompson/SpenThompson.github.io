import React from "react";
import { Collapse, DropdownMenu, DropdownItem, Nav, NavbarToggler, NavItem, UncontrolledDropdown  } from "reactstrap";
import { CustDropdownToggle, CustNavbar, NavBrand, NavLink } from "./NavigationElements" 


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
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <CustDropdownToggle
                                caret
                                nav
                                color = "primary"
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
                                    <NavLink to = "/github">
                                        Github
                                    </NavLink> 
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </CustNavbar>
        </div>    
    )
}

export default Navigation;