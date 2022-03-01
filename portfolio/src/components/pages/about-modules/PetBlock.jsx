import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Custhr, Heading, Image, Text } from "../PageElements";
import tofu from "./Resources/Tofu.jpeg";
import autumn from "./Resources/Autumn.JPG";

function PetBlock(){
    return(
        <div className="petblock">
            <Container className="d-flex justify-content-center" fluid>
                <Col xs="2"/>
                <Col md="3">
                    <Heading style={{textAlign: "left"}}>Autumn</Heading>
                    <Text style={{textAlign: "left"}}>Our princess and the first pet of the household.  We adopted Autumn from an adoption fair where she flopped right into our laps as the tiniest kitten you've ever seen.  
                    Years later, she'll still do that every now and then, but only on her terms.  Autumn is a little slower to come around to people, but once she does she'll be all over you!</Text>
                </Col>
                <Col md="4">
                    <Container className="d-flex justify-content-center" fluid>
                        <Image src={autumn} className="img-fluid styled" width="50%" alt="Autumn, another white cat"/>
                    </Container>
                </Col>
                <Col xs="1"/>
            </Container>
            <Row>
                <p><Custhr/></p>
            </Row>
            <Container className="d-flex justify-content-center" fluid>
                <Col xs="2"/>
                <Col md="3">
                    <Heading style={{textAlign: "left"}}>Tofu</Heading>
                    <Text style={{textAlign: "left"}}>Our littlest street rat.  We adopted Tofu after she approached my partner and immediately rubbed up on him and loved on him when he was arriving home from work.  
                    A few days after, we took her to the vet, checked for a microchip and diseases, and once she was cleared, we adopted her!  Tofu adores people and loves to cuddle with anyone she comes across.</Text>
                </Col>
                <Col md="4">
                    <Container className="d-flex justify-content-center">
                        <Image src={tofu} className="img-fluid styled" width="50%" alt="Tofu, a white cat"/>
                    </Container>
                </Col>
                <Col xs="1"/>
            </Container>
        </div>
    )
}

export default PetBlock;