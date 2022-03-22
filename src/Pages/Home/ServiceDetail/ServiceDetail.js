import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const params = useParams();
    // const [services, setServices] = useState([]);
    const [service, setService] = useState({});
    console.log(service);
    useEffect(() => {
        fetch(`https://newlife-hospital-server.vercel.app/services/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setService(data)

            })


    }, [])




    console.log(service);



    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={service?.img} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{service?.name}</Card.Title>
                    <Card.Text>
                        {service?.description}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Link to="/" className="text-danger text-center mx-auto">Home</Link>
        </div>
    );
};

export default ServiceDetail;