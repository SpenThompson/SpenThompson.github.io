import { NavLink as Link} from "react-router-dom";
import { DropdownToggle, Navbar } from "reactstrap";
import styled from "styled-components";

export const CustNavbar = styled(Navbar)`
    display: inline-block;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) /2);
    vertical-align: top;
    z-index: 12;
    float: none;
`;

export const LogoImage = styled.img`
    max-width: 75px;
    max-height: 75px;
    display: inline-block;
    marginTop: -7;
    align-items: center;
    padding: 7px 10px;
`;

export const NavBrand = styled(Link)`
    color: #FFC700;
    display: inline-block;
    font-size: 30px;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    font-family: "Asher Punk", monospace;
    &:hover {
        text-decoration: none;
        color: #FFC700
    }
`;

export const NavLink = styled(Link)`
    color: #00C2BA;
    display: inline-block;
    align-items: center;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    padding: 0 1rem;
    font-family: 'DMMono', monospace;
    &.active {
        color: #FFF7F7
    }
    &:hover {
        color: #FFF7F7;
        text-decoration: none;
        transition: 200ms ease-in;
    }
`;  

export const OutsideNavLink = styled.a`
    color: #00C2BA;
    display: inline-block;
    align-items: center;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    padding: 0 1rem;
    font-family: 'DMMono', monospace;
    &.active {
        color: #FFF7F7
    }
    &:hover {
        color: #FFF7F7;
        text-decoration: none;
        transition: 200ms ease-in;
    }
`;

export const CustDropdownToggle = styled(DropdownToggle)`
    color: #00C2BA !important;
    display: inline-block;
    font-size: 14px;
    align-items: inherit;
    font-family: 'DMMono', monospace;
    text-decoration: none;
    padding: 0 1rem;
    font-family: 'DMMono', monospace;
    &:hover {
        color: #FFF7F7 !important;
        text-decoration: none !important;
        transition: 200ms ease-in !important;
    }
`;