import React from "react";
import { Col, Container, Row } from 'reactstrap';
import { CustFooter, Custhr, FooterTitle, FooterHeading, FooterLink, FooterLinks, FooterText } from "./FooterElements";

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