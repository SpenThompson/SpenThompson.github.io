import React from "react";
import { Col, Container, Row } from 'reactstrap';
import { Heading, Image, Text, TextLink, Pageblock} from './PageElements';
import MovieBlock from './about-modules/MovieBlock';
import PetBlock from './about-modules/PetBlock';
import StoryBlock from './about-modules/StoryBlock';
import trafalgar from './Resources/Trafalgar.jpg';


function About(){
    return(
        <div className="about" style={{backgroundColor: "#FFF7F7"}}>
            <Pageblock className="light">
                <Container className="d-flex justify-content-center" fluid>
                        <Col md='5'>
                            <Row>
                                <Heading style={{textAlign: "left"}} className="section-header">
                                    About Spencer Thompson
                                </Heading>
                            </Row>
                            <Row>
                                <Text style={{textAlign: "left"}}>
                                    I'm an aspiring web developer and current student at Hendrix College.  My work in web development focuses on the front-end and creating accessible applications for all users.  
                                    For instance, this app is made with a color pallette that uses colors of different saturations to make it colorblind-friendly!  I also enjoy dipping into graphic design, working to make 
                                    my own assets and making other assets look clean and up-to-date.
                                    <br/>
                                    <br/>
                                    While I'm professionally focused in on computer science, my interests span all over art and genres.  In addition to my Computer Science studies, I also major in English with a film emphasis.  
                                    My studies there focus on the effects of children's media on society at large, but I'm also an encyclopedia for horror movies and movie musicals. My thesis hones in on <i>Zootopia</i> specifically, 
                                    and how it both fails and succeeds a response to the Black Lives Matter movement.
                                    <br/>
                                    <br/>
                                    I devote my free time to one of my hundreds of hobbies: I sew, play Dungeons & Dragons, draw digitally, garden, obsess over video games, and read tarot cards to name a few of the more prominent ones.  
                                    I'll spend every waking second learning about something new just to further expand my repetoire.  I also enjoy collecting; I've spent decades collecting things like trading cards and recently started collecting vinyls too!
                                </Text>
                            </Row>
                        </Col>
                        <Col md='3'>
                            <Container className="d-flex justify-content-center" fluid>
                                <Image src={trafalgar} className="img-fluid styled" width="75%" alt="Spencer in Trafalgar Square"/>
                            </Container>
                        </Col>      
                </Container>
            </Pageblock>
            <Pageblock>
                <Container className="d-flex justify-content-center" fluid>
                    <Col>
                        <Row>
                            <Heading className="section-header">My Story</Heading>
                        </Row>
                        <StoryBlock />
                    </Col>
                </Container>
            </Pageblock>
            <Pageblock className="light">
                <Container className="d-flex justify-content-center" fluid>
                    <Col>
                        <Row>
                            <Heading className="section-header">Pets</Heading>
                        </Row>
                        <PetBlock />
                    </Col>
                </Container>
            </Pageblock>
            <Pageblock>
                <Container className="d-flex justify-content-center" fluid>
                    <Col>
                        <Row>
                            <Heading className="section-header">
                                My Favorite Films and Games
                            </Heading>
                        </Row>
                        <MovieBlock />
                    </Col>
                </Container>
            </Pageblock>
            <Pageblock className="light">
                <Container className="d-flex justify-content-center" fluid>
                    <Col>
                        <Row>
                            <Heading className="section-header">Placeholder</Heading>
                        </Row>
                    </Col>
                </Container>
            </Pageblock>
        </div>
    )
}

export default About;