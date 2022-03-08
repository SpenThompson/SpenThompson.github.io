import React from 'react';
import { CarouselItem, CarouselCaption, Container, Col, Row, UncontrolledCarousel, } from 'reactstrap';
import arches from './Resources/Arches.jpg';
import grandcanyon from './Resources/Grand Canyon.jpg';
import londonsubway from './Resources/London Subway.jpg';
import mshendrix from './Resources/MsHendrix.JPG';
import negative from './Resources/Negative Test.JPG';
import paddington from './Resources/Paddington.jpg';
import zion from './Resources/Zion.jpg';

function AdventureBlock(){
    return(
        <div className="adventureblock">
            <Container className="d-flex justify-content-center">
                <Col lg="8">
                    <UncontrolledCarousel
                        items={[
                            {
                                altText: 'My partner Logan and I at Arches National Park',
                                header: "Arches National Park",
                                key: 1,
                                src: arches
                            },
                            {
                                altText: 'My partner Logan and I at Zion National Park',
                                header: "Zion National Park",
                                key: 2,
                                src: zion
                            },
                            {
                                altText: 'Me at Grand Canyon National Park',
                                header: "Grand Canyon National Park",
                                key: 3,
                                src: grandcanyon
                            },
                            {
                                altText: 'Me and three other study abroad students on a London Subway Platform in Twickenham',
                                header: "Twickenham, London",
                                key: 4,
                                src: londonsubway
                            },
                            {
                                altText: "Me in Leicester Square's Christmas Village with the Paddington statue",
                                header: "Leicester Square, London",
                                key: 5,
                                src: paddington
                            },
                            {
                                altText: 'My study abroad group and I after receiving our Negative COVID tests, allowing us to fly back to America',
                                header: "Heathrow International Airport, London",
                                key: 6,
                                src: negative
                            },
                            {
                                altText: 'Me in the group of backup dancers competing for our contestant, Jeffery Bezhoes, in Mx. Hendrix, the annual charity drag show',
                                header: "Mx. Hendrix Dancers",
                                key: 7,
                                src: mshendrix
                            }
                        ]}
                    />
                </Col>
            </Container>
        </div>
    )
}

export default AdventureBlock;