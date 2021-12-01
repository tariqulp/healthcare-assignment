import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import doc1 from '../../Assets/images/doc1.jpg';
import doc2 from '../../Assets/images/doc2.jpg';
import doc3 from '../../Assets/images/doc3.jpg';

const Doctor = () => {
    return (
        <div>
            {/* here statically show our doctor data*/}
            <h1 style={{ color: '#0d6efd' }}>Our Doctors</h1>
            <div className='container my-5'>
                <Row xs={1} md={3} className="g-4">
                    {/* 1st card start */}
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={doc1} />
                            <Card.Body>
                                <Card.Title>Dr. Alex Furgosen</Card.Title>
                                <Card.Text>
                                    CANCER SPECIALIST
                                </Card.Text>
                                <Link to='/appoinment'>
                                    <Button variant="outline-primary">MAKE AN APPOINMENT</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 1st card end */}

                    {/* 2st card start */}
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={doc2} />
                            <Card.Body>
                                <Card.Title>Dr. Robert Smith</Card.Title>
                                <Card.Text>
                                    HEART SURGON
                                </Card.Text>
                                <Link to='/appoinment'>
                                    <Button variant="outline-primary">MAKE AN APPOINMENT</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 2st card end */}

                    {/* 3st card start */}
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={doc3} />
                            <Card.Body>
                                <Card.Title>Dr. Sharon Laura</Card.Title>
                                <Card.Text>
                                    FAMILY PHYSICIAN
                                </Card.Text>
                                <Link to='/appoinment'>
                                    <Button variant="outline-primary">MAKE AN APPOINMENT</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* 3st card end */}
                </Row>
            </div>
        </div>
    );
};

export default Doctor;