import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeDoctor = (props) => {
    const { _id, name, img, phone, specialist } = props.doctor;
    return (
        <Col>
            <Card className='mb-5'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-warning'>{name}</Card.Title>
                    <Card.Title className='text-danger'>                        {specialist}
                    </Card.Title>

                </Card.Body>
                <Card.Footer>
                    <div className='d-flex'>
                        <i class="fas fa-phone text-info me-3"></i>
                        <p>{phone}</p>
                    </div>

                    <Link to={`doctors/${_id}`}><button className='btn btn-success'>Get Appointment</button></Link>
                </Card.Footer>
            </Card>

        </Col >
    );
};

export default HomeDoctor;