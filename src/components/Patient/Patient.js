import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import p1 from '../../Assets/images/patient1.jpg';
import p2 from '../../Assets/images/patient2.jpg';
import p3 from '../../Assets/images/patient3.jpg';
import p4 from '../../Assets/images/patient4.jpg';

const Patient = () => {
    return (
        // statically show patient thought
        <div className='container p-5 my-5 rounded' style={{ backgroundColor: '#0d6dfda9' }}>
            <div className='text-white'>
                <h5>A good word means a lot</h5>
                <h1 style={{ fontWeight: '900' }}>Patient <span style={{ color: '#adc624' }}>testimonials</span></h1>
                <h5>It’s always the word of mouth that’s the best advice. Here are some of our…</h5>
            </div>
            <div className='container my-5'>
                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <Card style={{ background: 'none', border: 'none', color: 'white' }}>
                            <Card.Img variant="top" src={p1} style={{ borderRadius: '50%' }} />
                            <Card.Body>
                                <Card.Title>LARAINE FLEMMING</Card.Title>
                                <Card.Text>
                                    Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration.
                                </Card.Text>
                                {/* <Link to='/appoinment'>
                                    <Button variant="outline-primary">MAKE AN APPOINMENT</Button>
                                </Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ background: 'none', border: 'none', color: 'white' }}>
                            <Card.Img variant="top" src={p2} style={{ borderRadius: '50%' }} />
                            <Card.Body>
                                <Card.Title>TAYLA CHRISTISON</Card.Title>
                                <Card.Text>
                                    Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration.
                                </Card.Text>
                                {/* <Link to='/appoinment'>
                                    <Button variant="outline-primary">MAKE AN APPOINMENT</Button>
                                </Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ background: 'none', border: 'none', color: 'white' }}>
                            <Card.Img variant="top" src={p3} style={{ borderRadius: '50%' }} />
                            <Card.Body>
                                <Card.Title>CAREY HATHAWAY</Card.Title>
                                <Card.Text>
                                    Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services strategies.
                                </Card.Text>
                                {/* <Link to='/appoinment'>
                                    <Button variant="outline-primary">MAKE AN APPOINMENT</Button>
                                </Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ background: 'none', border: 'none', color: 'white' }}>
                            <Card.Img variant="top" src={p4} style={{ borderRadius: '50%' }} />
                            <Card.Body>
                                <Card.Title>CORI STARK</Card.Title>
                                <Card.Text>
                                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                                </Card.Text>
                                {/* <Link to='/appoinment'>
                                    <Button variant="outline-primary">MAKE AN APPOINMENT</Button>
                                </Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Patient;