import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const HomeServiceCard = (props) => {
    const s = props.service;

    return (
        <Col>
            <Card className='mb-5'>
                <Card.Img variant="top" src={s.img} />
                <Card.Body >
                    <Card.Title>{s.name}</Card.Title>
                    <Card.Text className="">
                        {s.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='mt-5'>
                    <Link to={`/serviceDetail/${s._id}`}>
                        <button className="btn btn-warning">More...</button>
                    </Link>
                </Card.Footer>
            </Card>

        </Col >

    );
};

export default HomeServiceCard;