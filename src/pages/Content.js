import React from 'react'
import { Container, Row, Col, Carousel, Button, Alert, Card, Table, ListGroup } from 'react-bootstrap';
import Homepage from '../Components/Homepage';


function Content() {

    return (<>
        <div style={{ height: "100%" }} >

            <div>
                
                        <div style={{ textAlign: "left", border: "1px solid #0d6efd", backgroundColor: "#0d6efd", padding: "10px" }}>
                            <div style={{paddingLeft:"250px"}}>
                            <div style={{ margin: " 100px  0px 10px 0px" }} ><h1>Welcome User</h1></div>
                            <div><h5>Now 20% flat discount on price abover 1000</h5></div>
                            <div style={{ margin: " 50px  0px 100px 0px" }}><Button variant='dark'>Shop Now</Button></div>
                            </div>
                        </div>

                    


            </div>
            <Homepage></Homepage>

        </div>

    </>
    )
}

export default Content
