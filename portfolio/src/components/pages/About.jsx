import React from "react";
import { Col, Container, Row, PopoverHeader, PopoverBody, UncontrolledPopover } from 'reactstrap';
import { Heading, Image, Text, TextLink, Pageblock, PosterButton } from './PageElements';
import trafalgar from './Resources/Trafalgar.jpg';
import sunsetboulevard from './Resources/SunsetBoulevard.jpg';
import muppet from './Resources/MuppetMovie.jpeg';
import parasite from './Resources/Parasite.jpg';
import moonlight from './Resources/Moonlight.jpg';
import ratatouille from './Resources/Ratatouille.jpg';
import persona from './Resources/Persona5.jpg';
import fireemblem from './Resources/FireEmblem.jpg';
import sims from './Resources/Sims.jpg';
import smashbros from './Resources/SmashBros.jpg';
import kingdomhearts from './Resources/KingdomHearts.jpg';

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
                                My studies there focus on the effects of children's media on society at large, but I'm also an encyclopedia for horror movies and movie musicals.
                            </Text>
                            </Row>
                        </Col>
                        <Col md='4'>
                            <Image src={trafalgar} className="img-fluid styled" width="60%" alt="Spencer in Trafalgar Square"/>
                        </Col>       
                </Container>
            </Pageblock>
            <Pageblock>
                <Container className="d-flex justify-content-center" fluid>
                    <Col>
                        <Row>
                            <Heading>
                                My Favorite Films and Games
                            </Heading>
                        </Row>
                        <Row>
                            <Container className="d-flex justify-content-center">
                                <PosterButton id="Popover1">
                                    <Image src={sunsetboulevard} className="img-fluid posters rounded" width="90%" alt="Sunset Boulevard Poster"/>
                                </PosterButton>
                                <UncontrolledPopover 
                                    placement="top"
                                    target="Popover1"
                                    trigger="legacy"
                                >
                                    <PopoverHeader>
                                        Sunset Boulevard (1950)
                                    </PopoverHeader>
                                    <PopoverBody>
                                        This is my favorite movie of all time.  I've always wanted to write a piece about the movie but I've never been able to bring myself to do it.  
                                        For someone like myself, saying I can't find the words to describe it is probably the greatest compliment I can give a movie.  I consider it absolutely perfect.
                                    </PopoverBody>
                                </UncontrolledPopover>
                                <PosterButton id="Popover2">
                                    <Image src={muppet} className="img-fluid posters rounded" width="90%" alt="The Muppet Movie Poster"/>
                                </PosterButton>
                                <UncontrolledPopover 
                                    placement="top"
                                    target="Popover2"
                                    trigger="legacy"
                                >
                                    <PopoverHeader>
                                        The Muppet Movie (1979)
                                    </PopoverHeader>
                                    <PopoverBody>
                                        This was probably the beginning of my obsession with Jim Henson and the Muppets.  There really is nothing better than singing along and laughing at the gags all over again.
                                        Since this is my go-to fuzzy-feeling movie, if I ever need a pick-me-up, I can always turn to my favorite frogs, dogs, bears, chickens, and whatevers.
                                    </PopoverBody>
                                </UncontrolledPopover>
                                <PosterButton id="Popover3">
                                    <Image src={parasite} className="img-fluid posters rounded" width="90%" alt="Parasite Poster"/>
                                </PosterButton>
                                <UncontrolledPopover 
                                    placement="top"
                                    target="Popover3"
                                    trigger="legacy"
                                >
                                    <PopoverHeader>
                                        Parasite (2019)
                                    </PopoverHeader>
                                    <PopoverBody>
                                        I can't speak too highly about this movie.  It's the perfect commentary and critique on late-stage capitalism, and I doubt that it can ever be topped.  
                                        Every time I watch this movie, I find more to talk about and focus on.  Parasite is the perfect modern-day tragedy and it is a must-watch for anyone.
                                    </PopoverBody>
                                </UncontrolledPopover>
                                <PosterButton id="Popover4">
                                    <Image src={moonlight} className="img-fluid posters rounded" width="90%" alt="Moonlight Poster"/>
                                </PosterButton>
                                <UncontrolledPopover 
                                    placement="top"
                                    target="Popover4"
                                    trigger="legacy"
                                >
                                    <PopoverHeader>
                                        Moonlight (2016)
                                    </PopoverHeader>
                                    <PopoverBody>
                                        I've never written about a film more than this one.  Something about this movie is just enrapturing; the color pallette (which I'm <i>totally</i> not inspired by), the story structure, and the 
                                        characters themselves all work together to create this absolutely gorgeous movie.  If you've never seen this before, do yourself a favor and clear two hours.
                                    </PopoverBody>
                                </UncontrolledPopover>
                                <PosterButton id="Popover5">
                                    <Image src={ratatouille} className="img-fluid posters rounded" width="90%" alt="Ratatouille Poster"/>
                                </PosterButton>
                                <UncontrolledPopover 
                                    placement="top"
                                    target="Popover5"
                                    trigger="legacy"
                                >
                                    <PopoverHeader>
                                        Ratatouille (2007)
                                    </PopoverHeader>
                                    <PopoverBody>
                                        I actually wrote an entire video essay about this movie.  For my class on Film Theory, I wanted to cover how film can replicate the other senses through 
                                        only the senses of sight and sound.  I even made actually Ratatouille as well, kind of working it into an overarching metaphor with the essay.  I absolutely recommend both 
                                        the food and the movie!
                                    </PopoverBody>
                                </UncontrolledPopover>
                            </Container>
                        </Row>
                        <Row>
                            <Container className="d-flex justify-content-center">
                                <PosterButton id="Popover6">
                                    <Image src={persona} className="img-fluid posters rounded" width="90%" alt="Persona 5 Boxart"/>
                                </PosterButton>
                                <PosterButton id="Popover7">
                                    <Image src={fireemblem} className="img-fluid posters rounded" width="90%" alt="Fire Emblem Awakening Boxart"/>
                                </PosterButton>
                                <PosterButton id="Popover8">
                                    <Image src={sims} className="img-fluid posters rounded" width="90%" alt="The Sims 3 Boxart"/>
                                </PosterButton>
                                <PosterButton id="Popover9">
                                    <Image src={smashbros} className="img-fluid posters rounded" width="90%" alt="Super Smash Bros. Ultimate Boxart"/>
                                </PosterButton>
                                <PosterButton id="Popover10">
                                    <Image src={kingdomhearts} className="img-fluid posters rounded" width="90%" alt="Kingdom Hearts 3 Boxart"/>
                                </PosterButton>
                            </Container>
                        </Row>
                    </Col>
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