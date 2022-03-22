
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const { _id, img, description, name } = props.service;
    console.log(props.service);
    return (
        <Col>
            <Card className="bg-dark text-white mb-3 .black-bg-container">
                <Card.Img src={img} alt="Card image" style={{ height: "450px" }} />
                <div className="black-bg"></div>
                <Card.ImgOverlay>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <Link className="text-info" to={`/serviceDetail/${_id}`}>
                            More...
                        </Link>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default Service;