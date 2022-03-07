import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Heading, Text } from "../PageElements";

function StoryBlock(){
    return(
        <div className="storyblock">
            <Container className="d-flex justify-content-center">
                <Col lg="7">
                    <Text style={{textAlign: "left"}} className="in-dark">
                        I was born in Little Rock, AR and lived in Sherwood, AR for the first few months of my life. Before I even turned 2, my family (my mother, father, and older brother) moved to Cabot, AR and spent the rest of my childhood there.  Some of my earliest memories are of surfing the web and tinkering on the desktop computer we had in the excercise room of that old house.  
                        Even at the ripe old age of 6, everyone could tell I was going to grow up to work with tech.<br/><br/>
                        My school years consisted of always trying to take the spotlight; whether it be the children's theater I participated in during elementary school, showing off as captain of the Quiz Bowl team through middle school and junior high, or drawing attention with my performances in Speech and Debate throughout high school, all the while I was sharpening my technical 
                        skills.  In the meantime, I became fascinated with graphic design, understanding marketability from a visual perspective, and the importance of visual appeal.<br/><br/>
                        When I came to Hendrix College, I instantly began upon the Computer Science track.  At the same time, in the strangest stroke of luck, I was able to get into an Introductory Film Criticism class.  Both set me on my path of double majoring with my second major becoming an English major with a 
                        film emphasis.  I've constantly and consistently left my mark at Hendrix.  I founded and lead student organizations, participated in each tradition, and all the while, kept up my studies.<br/><br/>
                        Now, I live with my partner and our multiple pets (see them below!) in Fayetteville, AR.  I've listed out a couple of my favorite movies and the video games that inspire me below as well.
                    </Text>
                </Col>
            </Container>
        </div>
    )
}

export default StoryBlock;