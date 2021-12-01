import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShopDetail = (props) => {
    const { name, price, detail, img } = props.result;
    return (
        <div className='container'>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} style={{ height: '20rem' }} />
                    <hr />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {detail}
                        </Card.Text>
                        <Card.Title>{price}</Card.Title>

                        <Link to='./thanks'><Button variant="outline-primary">BUY NOW</Button></Link>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ShopDetail;