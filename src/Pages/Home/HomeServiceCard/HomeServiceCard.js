import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const HomeServiceCard = (props) => {
    const s = props.service;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={s.img} />
                <Card.Body>
                    <Card.Title>{s.name}</Card.Title>
                    <Card.Text>
                        {s.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/serviceDetail/${s.id}`}>
                        More
                    </Link>
                </Card.Footer>
            </Card>

        </Col >

    );
};

export default HomeServiceCard;