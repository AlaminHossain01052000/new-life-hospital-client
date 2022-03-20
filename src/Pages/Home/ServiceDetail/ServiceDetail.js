import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const params = useParams();
    const [services, setServices] = useState([]);
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => {
                setServices(data)

            })


    }, [])
    useEffect(() => {
        setService(services.filter(service => service.id === Number(params.id)))
    }, [services])



    console.log(service);



    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={service[0]?.img} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{service[0]?.name}</Card.Title>
                    <Card.Text>
                        {service[0]?.description}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

        </div>
    );
};

export default ServiceDetail;