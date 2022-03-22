import React, { useEffect, useState } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import HomeServiceCard from '../HomeServiceCard/HomeServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://newlife-hospital-server.vercel.app/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)

            })


    }, [])

    return (
        <div className="mt-5">
            <h1 className="text-center text-danger">Our Services</h1>
            <hr className='w-25 text-center mx-auto mb-5' />
            <Container>
                <Row lg={3} md={2} sm={1} xs={1}>
                    {
                        services.slice(0, 6).map(service => <HomeServiceCard service={service}></HomeServiceCard>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default HomeServices;