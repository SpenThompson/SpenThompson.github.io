import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components';

export const CustFooter = styled.div`
    background-color: #190B2A;
    width: 100%;
    display: flex;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding:45px 0 20px;
`;

export const FooterText = styled.p`
    font-family: 'DMMono', monospace;
    color: #00C2BA;
`;

export const FooterHeading = styled.h6`
    font-family: 'Asher Punk', monospace;
    color: #FF8FCF;
    font-size: 24px;
`;

export const FooterTitle= styled.h5`
    font-family: 'Asher Punk', monospace;
    color: #FFC700;
    font-size: 30px;
`;

export const FooterLink = styled(Link)`
    color: #00C2BA;
    display: flex;
    align-items: center;
    font-family: 'Cabin', sans-serif;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.inline li{
      display:inline-block;
    }
    &.active {
      color: #FFF7F7;
    }
    &:hover {
      color: #FFF7F7;
      text-decoration: none;
      transition: 200ms ease-in;
    }
`;

export const FooterLinks = styled.ul`
    padding-left:0;
    list-style:none;
    columns: 2;
    .li{
        display:block;
    }
`;

export const Custhr = styled.hr`
    display: block;
    border-color: #FF8FCF;
    background-color: #FF8FCF;
`;

export const FooterSocialButton = styled.a`
    color: #00C2BA;
    font-size: 35px;
    padding-left: 10px;
    padding-right: 10px;
    &:hover {
        color: #FFF7F7;
        text-decoration: none;
        transition: 200ms ease-in;
      }
`;



