import React from 'react';
import { Row } from 'react-bootstrap';
import useShops from '../../hooks/useShops';
import ShopDetail from '../ShopDetail/ShopDetail';

const Shop = () => {
    const { shop } = useShops();
    return (
        // dynamically show shop data
        <div className='my-5'>
            <h1 style={{ color: '#0d6efd' }}>Online Shop</h1>
            <div className='container my-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        shop?.map(result => <ShopDetail key={result.id} result={result}></ShopDetail>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Shop;