import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Heading, Text } from "../PageElements";

function StoryBlock(){
    return(
        <div className="storyblock">
            <Container className="d-flex justify-content-center">
                <Col lg="8">
                    <Text style={{textAlign: "left"}} className="in-dark">
                        I was born in Little Rock, AR and lived in Sherwood, AR for the first few months of my life. Before I even turned 2, my family (my mother, father, and older brother) moved to Cabot, AR and spent the rest of my childhood there.  Some of my earliest memories are of surfing the web and tinkering on the desktop computer we had in the excercise room of that old house.  
                        Even at the ripe old age of 6, everyone could tell I was going to grow up to work with tech.<br/><br/>
                        My school years consisted of always trying to take the spotlight; whether it be the children's theater I participated in during elementary school, showing off as captain of the Quiz Bowl team through middle school and junior high, or drawing attention with my performances in Speech and Debate throughout high school.
                    </Text>
                </Col>
            </Container>
        </div>
    )
}

export default StoryBlock;