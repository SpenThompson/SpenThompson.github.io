import React from 'react';
import { Container, Row, PopoverHeader, PopoverBody, UncontrolledPopover } from 'reactstrap';
import { Image, PosterButton } from '../PageElements';
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

function ButtonBlock(){
    return(
        <div className="buttonblock">
            <Row>
                <Container className="d-flex justify-content-center">
                    <PosterButton id="MoviePopover1">
                        <Image src={sunsetboulevard} className="img-fluid posters rounded" width="90%" alt="Sunset Boulevard Poster"/>
                    </PosterButton>
                    <UncontrolledPopover 
                        placement="top"
                        target="MoviePopover1"
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
                    <PosterButton id="MoviePopover2">
                        <Image src={muppet} className="img-fluid posters rounded" width="90%" alt="The Muppet Movie Poster"/>
                    </PosterButton>
                    <UncontrolledPopover 
                        placement="top"
                        target="MoviePopover2"
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
                    <PosterButton id="MoviePopover3">
                        <Image src={parasite} className="img-fluid posters rounded" width="90%" alt="Parasite Poster"/>
                    </PosterButton>
                    <UncontrolledPopover 
                        placement="top"
                        target="MoviePopover3"
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
                    <PosterButton id="MoviePopover4">
                        <Image src={moonlight} className="img-fluid posters rounded" width="90%" alt="Moonlight Poster"/>
                    </PosterButton>
                    <UncontrolledPopover 
                        placement="top"
                        target="MoviePopover4"
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
                    <PosterButton id="MoviePopover5">
                        <Image src={ratatouille} className="img-fluid posters rounded" width="90%" alt="Ratatouille Poster"/>
                    </PosterButton>
                    <UncontrolledPopover 
                        placement="top"
                        target="MoviePopover5"
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
                    <PosterButton id="GamePopover1">
                        <Image src={persona} className="img-fluid posters rounded" width="90%" alt="Persona 5 Boxart"/>
                    </PosterButton>
                    <UncontrolledPopover 
                        placement="top"
                        target="GamePopover1"
                        trigger="legacy"
                    >
                        <PopoverHeader>
                            Persona 5 (2016)
                        </PopoverHeader>
                        <PopoverBody>
                            The most stylish and amazingly animated game I've ever seen.  The UIs and Menus of this game are what I aspire to make in my web dev work and can only hope to ever
                            reach this level.  Plus, I do like a good psychological story, so a lovely two-for-one special in a fun game.
                        </PopoverBody>
                    </UncontrolledPopover>
                    <PosterButton id="GamePopover2">
                        <Image src={fireemblem} className="img-fluid posters rounded" width="90%" alt="Fire Emblem Awakening Boxart"/>
                    </PosterButton>
                    <UncontrolledPopover 
                        placement="top"
                        target="GamePopover2"
                        trigger="legacy"
                    >
                        <PopoverHeader>
                            Fire Emblem Awakening (2012)
                        </PopoverHeader>
                        <PopoverBody>
                            This game was my introduction to the Fire Emblem franchise, which is now one of my absolute favorite game series of all time.  The stratgey RPG genre is already a 
                            quite a fun genre, add in the weapon triangle and interesting characters and you get a game that I can sink hours upon hours into.
                        </PopoverBody>
                    </UncontrolledPopover>
                    <PosterButton id="GamePopover3">
                        <Image src={sims} className="img-fluid posters rounded" width="90%" alt="The Sims 3 Boxart"/>
                    </PosterButton>
                    <UncontrolledPopover 
                        placement="top"
                        target="GamePopover3"
                        trigger="legacy"
                    >
                        <PopoverHeader>
                            The Sims 3 (2009)
                        </PopoverHeader>
                        <PopoverBody>
                            What else is there to say about The Sims than it's absurdly fun?  It wouldn't be inaccurate to call me a control freak, and to have such a good way to vent those emotions 
                            and have fun doing it is invaluable.  Though I do enjoy The Sims 4, Sims 3 was my first game in the series and, in my opinion, was the best.
                        </PopoverBody>
                    </UncontrolledPopover>
                    <PosterButton id="GamePopover4">
                        <Image src={smashbros} className="img-fluid posters rounded" width="90%" alt="Super Smash Bros. Ultimate Boxart"/>
                    </PosterButton>
                    <UncontrolledPopover 
                        placement="top"
                        target="GamePopover4"
                        trigger="legacy"
                    >
                        <PopoverHeader>
                            Super Smash Bros. Ultimate (2018)
                        </PopoverHeader>
                        <PopoverBody>
                            Some of my earliest memories are sitting in my grandma's sunroom, playing Super Smash Bros Melee with my brother and cousins.  Ever since I was a little kid, I've loved this 
                            game series and love to take a day just to remind myself how much I love it.  By the way, I'm a Wii Fit Trainer main.
                        </PopoverBody>
                    </UncontrolledPopover>
                    <PosterButton id="GamePopover5">
                        <Image src={kingdomhearts} className="img-fluid posters rounded" width="90%" alt="Kingdom Hearts 3 Boxart"/>
                    </PosterButton>
                    <UncontrolledPopover 
                        placement="top"
                        target="GamePopover5"
                        trigger="legacy"
                    >
                        <PopoverHeader>
                            Kingdom Hearts 3 (2019)
                        </PopoverHeader>
                        <PopoverBody>
                            When my mom got me Kingdom Hearts: Chain of Memories for the Nintendo Gameboy Advance, she got me hooked.  I've always been a Disney fan, so a game that lets me fight creepy 
                            monsters alongside Donald Duck and Jack Skellington?  Sign me up!  KH3 really did perfect the combat system, even if the story had a few plotholes.
                        </PopoverBody>
                    </UncontrolledPopover>
                </Container>
            </Row>
        </div>
    )
}

export default ButtonBlock;