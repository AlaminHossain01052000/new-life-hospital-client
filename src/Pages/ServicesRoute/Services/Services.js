import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../Home/Header/Header';
import Service from '../Service/Service';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://newlife-hospital-server.vercel.app/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)

            })


    }, [])
    return (
        <div>
            <Header></Header>
            <h1 className="text-center my-5 text-danger">Our Services</h1>
            <hr className="mb-5" style={{ border: "1px solid red" }} />
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