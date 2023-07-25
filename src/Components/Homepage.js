import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Landing from './Landing';

function Homepage() {

    const obj = [
        {
            title: "play cricket",
            descripition: "this is my task is related to sports",
            subHeading: "this has to be done by tomrrow",
            createdBy: "Paranjay",
            date: "12-10-23"
        },
        {
            title: "play football",
            descripition: "this is my task is related to sports",
            subHeading: "this has to be done by tomrrow",
            createdBy: "Paranjay",
            date: "12-10-23"


        },
        {
            title: "play golf",
            descripition: "this is my task is related to sports",
            subHeading: "this has to be done by tomrrow",
            createdBy: "Paranjay",
            date: "12-10-23"


        },
        {
            title: "ride cycle",
            descripition: "this is my task is related to sports",
            subHeading: "this has to be done by tomrrow",
            createdBy: "Paranjay",
            date: "12-10-23"

        },
        {
            title: "play chess",
            descripition: "this is my task is related to sports",
            subHeading: "this has to be done by tomrrow",
            createdBy: "Paranjay",
            date: "12-10-23"

        },
        {
            title: "play fencinng",
            descripition: "this is my task is related to sports",
            subHeading: "this has to be done by tomrrow",
            createdBy: "Paranjay",
            date: "12-10-23"

        },


    ]

    const [itemdata, setdata] = useState([])

    const getdata = () => {
        setdata([...obj])
    }
    useEffect(() => {
        getdata()
    }, [])
    console.log(itemdata)
    return (<>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} className='border' >
            {
                itemdata.map((e, i) => {
                    return <div className='m-1 ' style={{ width: "500px", height: "200px" }}>
                        <div>
                            <Row>
                                <Col lg="2"><h1>0{i + 1}</h1></Col>
                                <Col lg="10">
                                    <div className='my-1' style={{ textAlign: "left" }}
                                    ><h4>{e.title.toUpperCase()}</h4>
                                    </div>
                                    <Container className='my-2' >

                                        <div
                                            style={{ textAlign: "left" }}

                                        >Note-{e.subHeading}
                                        </div>
                                    </Container>
                                    <Container>

                                        <div style={{ textAlign: "left" }}>Descripition:{e.descripition}</div>
                                    </Container>
                                    <Container>

                                        <div style={{ textAlign: "left" }}>Created-By:{e.createdBy}
                                        </div>
                                    </Container>
                                    <Container>

                                        <div style={{ textAlign: "left" }}>Created-On:{e.date}
                                        </div>
                                    </Container>


                                </Col>
                            </Row>
                        </div>
                    </div>


                })

            }

        </div>
        <div className='m-3 position-relative'>

        <Landing></Landing>
        </div>
    </>
    )
}

export default Homepage

