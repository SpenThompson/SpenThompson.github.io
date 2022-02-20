import { NavLink as Link} from "react-router-dom";
import { DropdownToggle, Navbar } from "reactstrap";
import styled from "styled-components";

export const CustNavbar = styled(Navbar)`
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) /2);
    z-index: 12;
`;

export const NavBrand = styled(Link)`
    color: #FFC700;
    display: flex;
    font-size: 30px;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: none;
        color: #FFC700
    }
`;

export const NavLink = styled(Link)`
    color: #00C2BA;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    padding: 0 1rem;
    &.active {
        color: #FFF7F7
    }
    &:hover {
        color: #FFF7F7;
        text-decoration: none:
        transition: 200ms ease-in;
    }
`;  

export const CustDropdownToggle = styled(DropdownToggle)`
    color: #00C2BA;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
`;