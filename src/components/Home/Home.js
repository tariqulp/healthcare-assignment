import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Assets/images/banner-1.jpg'
import banner2 from '../../Assets/images/banner-2.jpg'
import banner3 from '../../Assets/images/banner-3.jpg'
import Doctor from '../Doctor/Doctor';
import Patient from '../Patient/Patient';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div>
                <Services></Services>
                {/* showing extra two section */}
                <Doctor></Doctor>
                <Patient></Patient>
            </div>
        </div>
    );
};

export default Home;