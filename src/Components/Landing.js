import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Aside from './Aside'

function Landing() {
    const data = [
        {
            title: "Donald G.McNeil Jr.",
            subHeading: "",
            description: "New York Times Magazine Interview With Dr. Fauci: Science Fiction",
            subdes: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that",
            createdBy: "N Kumar",
            img: "https://picsum.photos/200/300?random=2"
        },
        {
            title: "Donald G.McNeil Jr.",
            subHeading: "",
            description: "New York Times Magazine Interview With Dr. Fauci: Science Fiction",
            subdes: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that",
            createdBy: "N Kumar",
            img: "https://picsum.photos/200/300?random=2"
        },
        {
            title: "Donald G.McNeil Jr.",
            subHeading: "",
            description: "New York Times Magazine Interview With Dr. Fauci: Science Fiction",
            subdes: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that",
            createdBy: "N Kumar",
            img: "https://picsum.photos/200/300?random=2"
        },
        {
            title: "Donald G.McNeil Jr.",
            subHeading: "",
            description: "New York Times Magazine Interview With Dr. Fauci: Science Fiction",
            subdes: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that",
            createdBy: "N Kumar",
            img: "https://picsum.photos/200/300?random=2"
        },
        {
            title: "Donald G.McNeil Jr.",
            subHeading: "",
            description: "New York Times Magazine Interview With Dr. Fauci: Science Fiction",
            subdes: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that",
            createdBy: "N Kumar",
            img: "https://picsum.photos/200/300?random=2",
        },
        {
            title: "Donald G.McNeil Jr.",
            subHeading: "",
            description: "New York Times Magazine Interview With Dr. Fauci: Science Fiction",
            subdes: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that",
            createdBy: "N Kumar",
            img: "https://picsum.photos/200/300?random=2"
        },
        {
            title: "Donald G.McNeil Jr.",
            subHeading: "",
            description: "New York Times Magazine Interview With Dr. Fauci: Science Fiction",
            subdes: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that",
            createdBy: "N Kumar",
            img: "https://picsum.photos/200/300?random=2"
        },
        {
            title: "Donald G.McNeil Jr.",
            subHeading: "",
            description: "New York Times Magazine Interview With Dr. Fauci: Science Fiction",
            subdes: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that",
            createdBy: "N Kumar",
            img: "https://picsum.photos/200/300?random=2"
        },
        {
            title: "Donald G.McNeil Jr.",
            subHeading: "",
            description: "New York Times Magazine Interview With Dr. Fauci: Science Fiction",
            subdes: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that",
            createdBy: "N Kumar",
            img: "https://picsum.photos/200/300?random=2"
        },

    ]

    return (<>
        <div>
            
                <Row>
                    <Col lg="8">

                        <div  >
                            {
                                data.map((e) => {
                                    return <div className='my-4'>
                                        <Row>

                                            <Col lg="10">
                                                <div style={{ margin: "5px" }}>
                                                    <p className='text-left font-weight-bold'>{e.title}</p>
                                                    <p className='text-left font-weight-bold' ><h3>{e.description}</h3></p>
                                                    <p className='text-left'>{e.subdes}</p>
                                                    <p className='text-left' >{e.createdBy}</p></div>
                                            </Col>
                                            <Col lg="2">
                                                <img src={e.img} height={200} width="200px"></img>
                                            </Col>
                                        </Row>
                                    </div>
                                })
                            }
                        </div>

                    </Col>
                    <Col lg="4">
                    <div >

                    <Aside></Aside>
                    </div>
                    </Col>
                </Row>
            
        </div></>
    )
}

export default Landing
