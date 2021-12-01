import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceDetail = (props) => {
    const { id, name, details, img } = props.result
    return (
        <div>
            {/* showing all services */}
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/moredetailes/${id}`}>
                            <Button variant="outline-primary">READ MORE</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceDetail;