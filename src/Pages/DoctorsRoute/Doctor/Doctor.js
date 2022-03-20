import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { id, name, img, phone, specialist } = props.doctor;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {specialist}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {phone}
                </Card.Footer>
            </Card>

        </Col >
    );
};

export default Doctor;