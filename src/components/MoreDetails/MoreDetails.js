import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const MoreDetails = () => {
    // using useParam for dynamic data
    const { serviceId } = useParams();
    const { service } = useServices();
    let serviceToShow = service?.filter(s => s.id == serviceId)


    return (
        <div className="container shadow-lg p-3 mb-5 bg-body rounded-1" style={{ margin: "2px solid grey" }}>
            <Card>
                <Card.Img variant="top" src={serviceToShow[0]?.img} />
                <Card.Body>
                    <Card.Text>
                        <div>
                            <h3>{serviceToShow[0]?.name}</h3>
                            <p>{serviceToShow[0]?.moreDetails}</p>

                        </div>
                    </Card.Text>
                    <Link to="/home">
                        <Button variant="outline-primary" className="mt-3">BACK</Button>
                    </Link>
                </Card.Body>
            </Card>





        </div>
    );
};

export default MoreDetails;