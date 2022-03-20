
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { img, description, name } = props.service;

    return (
        <Col>
            <Card className="bg-dark text-white mb-3">
                <Card.Img src={img} alt="Card image" style={{ height: "450px" }} />
                <Card.ImgOverlay>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default Service;