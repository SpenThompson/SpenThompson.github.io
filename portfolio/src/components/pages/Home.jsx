import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Heading, Jumbotron, Pageblock, Text } from "./PageElements";
import img from "./Resources/home-image.png";

function Home(){
    return(
        <div className="home" style={{backgroundColor: "#FFF7F7"}}>
            <Jumbotron className="home-jumbo" img={img}>
                <Heading className="eye-catch">You have the vision <br/> I have the know-how <br /> Let's make art together</Heading>
            </Jumbotron>
            <Pageblock className="light">
                <Container className="d-flex justify-content-center" fluid>
                    <Col md="6">
                        <Row>
                            <Heading>Hello!</Heading>
                        </Row>
                        <Row>
                            <Text>My name is Spencer Thompson and it's a pleasure to have you here! I'm a current student at Hendrix College studying Computer Science and English with a Film emphasis and an aspiring Front-End Web Developer!</Text>
                        </Row>
                        <Row>
                            <Text>This website is my home base for all of my current projects. Here you'll find a few examples of Web Applications I've worked on, essays I've written on Film and Literature, and other projects I'm currently producing!</Text>
                        </Row>
                    </Col>
                </Container>
            </Pageblock>
            <Pageblock>
                <Container classname="d-flex justify-content-center" fluid>
                    <Col md="6">
                        <Row>
                            <Heading>Beans</Heading>
                        </Row>
                    </Col>
                    <Col md="6">

                    </Col>
                </Container>
            </Pageblock>
            <Pageblock className="light">
                <Container classname="d-flex justify-content-center" fluid>
                    <Col>
                        <Row>
                            <Heading>Beans</Heading>
                        </Row>
                    </Col>
                </Container>
            </Pageblock>
        </div>
    )
}

export default Home;