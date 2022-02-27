import React from "react";
import { Col, Container, Row } from 'reactstrap';
import { Heading, Image, Text, TextLink, Pageblock } from './PageElements';
import trafalgar from './Resources/Trafalgar.jpg';

function About(){
    return(
        <div className="about" style={{backgroundColor: "#FFF7F7"}}>
            <Pageblock className="light">
                <Container className="d-flex justify-content-center" fluid>
                        <Col xs='1'/>
                        <Col md='5'>
                            <Row>
                                <Heading style={{textAlign: "left"}}>
                                    About Spencer Thompson
                                </Heading>
                            </Row>
                            <Row>
                            <Text style={{textAlign: "left"}}>
                                I'm an aspiring web developer and current student at Hendrix College.  My work in web development focuses on the front-end and creating accessible applications for all users.  
                                For instance, this app is made with a color pallette that uses colors of different saturations to make it colorblind-friendly!
                                <br/>
                                <br/>
                                While I'm professionally focused in on computer science, my interests span all over art and genres.  In addition to my Computer Science studies, I also major in English with a film emphasis.  
                                My studies there focus on the effects of children's media on society at large.
                            </Text>
                            </Row>
                        </Col>
                        <Col md='4'>
                            <Image src={trafalgar} className="img-fluid rounded" width="60%" alt="Spencer in Trafalgar Square"/>
                        </Col>       
                </Container>
            </Pageblock>
            <Pageblock>
                <Container className="d-flex justify-content-center" fluid>
                    <Row>
                        <Heading>
                            Favorite Films and Games
                        </Heading>
                    </Row>
                </Container>
            </Pageblock>
            <Pageblock className="light">
                <Container className="d-flex justify-content-center" fluid>
                    <Row>
                        <Heading>
                            Pets
                        </Heading>
                    </Row>
                </Container>
            </Pageblock>
        </div>
    )
}

export default About;