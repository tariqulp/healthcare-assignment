import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const { service } = useServices();
    return (
        // dynamically show service
        <div className='my-5'>
            <h1 style={{ color: '#0d6efd' }}>Our Services</h1>
            <div className='container my-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        service?.map(result => <ServiceDetail key={result.id} result={result}></ServiceDetail>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;