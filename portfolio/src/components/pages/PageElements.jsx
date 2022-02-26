import styled from "styled-components";

export const Jumbotron = styled.div`
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    &.home-jumbo{
        padding-top: 6rem;
        justify-content: center;
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
`;

export const Pageblock = styled.div`
    background-color: #190B2A;
    &.light{
        background-color: #FFF7F7;
    }
`;