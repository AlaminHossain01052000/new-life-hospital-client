
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
const Services = () => {
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
                <Row lg={2} md={2} sm={1} xs={1}>
                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;