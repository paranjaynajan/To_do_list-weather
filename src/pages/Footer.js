// 
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

 class Footer1 extends Component {
    render() {
        return (
            <footer style={{ backgroundColor: "#0d6efd", color: 'white' }} >
                <Container >
                    <Row>
                        <Col md={4}>
                            <h5 className='mt-2'>About Us</h5>
                            <p>
                                To be the fountainhead of novel ideas & innovations in science & technology & persist to be a foundation of pride for all indians.
                            </p>
                        </Col>
                        <Col md={4}>
                            <h5 className='mt-2'>Contact Us</h5>
                            <p>
                                Address:Indore, India 12345 <br />
                                Phone: (0731) 2484543  <br />
                                Email: ada@adad.org
                            </p>
                        </Col>
                        <Col md={4}>
                            <h5 className='mt-2'>Follow Us</h5>
                            <p>
                                <i className="fab fa-facebook fa-lg"></i>
                                <i className="fab fa-twitter fa-lg">ekart</i>
                                <i className="fab fa-instagram fa-lg"></i>
                            </p>
                        </Col>
                    </Row>
            
                   
                </Container>
            </footer>
        );
    }
}

export default Footer1
