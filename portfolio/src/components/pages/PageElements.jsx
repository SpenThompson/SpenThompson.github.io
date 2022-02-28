import styled from "styled-components";
import { Button } from 'reactstrap';

export const Jumbotron = styled.div`
    padding-bottom: 2rem;
    text-align: center;
    &.home-jumbo{
        padding-top: 6rem;
        justify-content: center;
        overflow: hidden;
        background: #FF8FCF;
        background: -webkit-linear-gradient(90deg, rgba(255,143,207,.7) 0%, rgba(206,150,251,.5) 50%, rgba(33,140,211,.7) 100%), url(${props => props.img});
        background-image: linear-gradient(90deg, rgba(255,143,207,.7) 0%, rgba(206,150,251,.5) 50%, rgba(33,140,211,.7) 100%), url(${props => props.img});
        background-size: cover;
        height: 400px;
    }
`;

export const Heading = styled.h1`
    font-family: 'DMMono', monospace;
    display: inline-block;
    font-size: 30px;
    color: #00C2BA;
    white-space: pre-line; 
    text-align: center;
    vertical-align: middle;
    padding-bottom: 1rem;
    &.eye-catch{
        font-size: 50px;
        font-family: "Asher Punk", monospace;
        color: #FFF7F7;  
    }
`

export const Text = styled.p`
    font-family: 'DMMono', monospace;
    display: inline-block;
    font-size: 16px;
    color: #190B2A;
    text-align: center;
    vertical-align: middle;
    white-space: pre-line; 
    &.in-dark{
        color: #FFF7F7;
    }
`;

export const Pageblock = styled.div`
    background-color: #190B2A;
    padding: 2rem 2rem;
    &.light{
        background-color: #FFF7F7;
    }
`;

export const Image = styled.img`
    min-width: 10%;
    text-align: center;
    &.styled{
        min-width: 150px;
        box-shadow: 5px 5px #FF8FCF;
    }
    &.posters{
        max-width: 200px;
    }
`;

export const PosterButton = styled(Button)`
    background-color: #190B2A;
    background-size: contain;
    display: block;
    border-color: #190B2A;
    &:hover{
        background-color: #FFC700;
        border-color: #FFC700
    }
    &:active{
        background-color: #FFC700;
        border-color: #FFC700;
    }
    &:focus{
        background-color: #FFC700;
        border-color: #FFC700
        box-shadow: 0 0 0 0.2rem rgba(213,160,33, 0.5) !important;
    }
`;

export const TextLink = styled.a`
    font-family: 'DMMono', monospace;
    display: inline-block;
    font-size: 16px;
    color: #190B2A;
    text-align: center;
    vertical-align: middle;
    white-space: pre-line;
    &.in-dark{
        color: #FFF7F7;
    }
    &:hover{
        color: #00C2BA;
        text-decoration: none;
        transition: 200ms ease-in;
    }
`;