import { NavbarBrand } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavBrand = styled(NavbarBrand)`
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
    color: #0388AO;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    &.active {
        color: #00C2BA
    }
    &:hover {
        color: #00C2BA;
        text-decoration: none:
        transition: 200ms ease-in;
    }
`;  