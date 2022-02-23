import React from "react";
import { Col, Container, Row } from 'reactstrap';
import { CustFooter, Custhr, FooterTitle, FooterHeading, FooterLink, FooterLinks, FooterText, FooterSocialButton } from "./FooterElements";
import { IoLogoGithub, IoLogoDiscord, IoLogoInstagram, IoLogoLinkedin, IoLogoPinterest, IoLogoSteam, IoLogoTwitch, IoLogoTwitter} from "react-icons/io5";

function Footer(props) {
    return (
        <div className="footer">
            <CustFooter>
                <Container>
                    <Row>
                        <Col xs="3">
                            <FooterTitle>Spencer Thompson</FooterTitle>
                        </Col>
                        <Col md="3">
                            <FooterHeading>Navigation</FooterHeading>
                            <FooterLinks>
                                <li><FooterLink to="/about">About</FooterLink></li>
                                <li><FooterLink to="/blog">Blog</FooterLink></li>
                                <li><FooterLink to="/contact">Contact</FooterLink></li>
                                <li><FooterLink to="/web-examples">Web Dev</FooterLink></li>
                                <li><FooterLink to="/essays">Essays</FooterLink></li>
                                <li><FooterLink to="/podcasts">Podcasts</FooterLink></li>
                            </FooterLinks>
                        </Col>
                        <Col md="6">
                            <FooterHeading>Social Media</FooterHeading>
                            <FooterSocialButton href={"https://github.com/SpenThompson"} target="_blank" rel="noopener noreferrer">
                                <IoLogoGithub/>
                            </FooterSocialButton>
                            <FooterSocialButton href={"https://www.linkedin.com/in/jspencerthompson/"} target="_blank" rel="noopener noreferrer">
                                <IoLogoLinkedin/>
                            </FooterSocialButton>
                            <FooterSocialButton href={"https://twitter.com/dispencedat"} target="_blank" rel="noopener noreferrer">
                                <IoLogoTwitter/>
                            </FooterSocialButton>
                            <FooterSocialButton href={"https://www.instagram.com/spencer.thomp/"} target="_blank" rel="noopener noreferrer">
                                <IoLogoInstagram/>
                            </FooterSocialButton>
                            <FooterSocialButton href={"https://www.pinterest.com/jamesspencerthompson/"} target="_blank" rel="noopener noreferrer">
                                <IoLogoPinterest/>
                            </FooterSocialButton>
                            <FooterSocialButton href={"https://steamcommunity.com/id/repulsa_Rita/"} target="_blank" rel="noopener noreferrer">
                                <IoLogoSteam/>
                            </FooterSocialButton>
                            <FooterSocialButton href={"https://www.twitch.tv/piratekingzed"} target="_blank" rel="noopener noreferrer">
                                <IoLogoTwitch/>
                            </FooterSocialButton>
                            <FooterSocialButton href={"https://discordapp.com/users/375430405182062613"} target="_blank" rel="noopener noreferrer">
                                <IoLogoDiscord/>
                            </FooterSocialButton>
                        </Col>
                    </Row>
                    <Custhr />
                    <Row>
                        <Col md="8">
                            <FooterText>Copyright &copy; 2022 All Rights Reserved by Spencer Thompson.</FooterText>
                        </Col>
                    </Row>
                </Container>
            </CustFooter>
        </div>
    )
}

export default Footer;