import React, { useEffect, useState } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import HomeServiceCard from '../HomeServiceCard/HomeServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => {
                setServices(data)

            })


    }, [])

    return (
        <div>
            <h1>Our Services</h1>
            <hr />
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