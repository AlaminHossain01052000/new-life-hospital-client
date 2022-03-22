import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Doctor = (props) => {
    const { user } = useAuth();
    const { _id, name, img, phone, specialist, review, numberOfReview } = props.doctor;
    const navigate = useNavigate();
    const goToGetAppointment = () => {
        navigate(`/doctors/${_id}`);
    }



    return (
        <Col>

            <Card className="bg-dark text-white mb-3 .black-bg-container">
                <Card.Img src={img} alt="Card image" style={{ height: "450px" }} />
                <div className="black-bg"></div>
                <Card.ImgOverlay>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {specialist}
                    </Card.Text>
                    <Card.Text className="mt-4">
                        {phone}
                        <br />
                        <button className="btn btn-warning my-2" onClick={goToGetAppointment}>Get Appointment</button>
                        <br />
                        {review}({numberOfReview})
                        <Link className="ms-3" to={`/addReview/${_id}`}>Add Review</Link>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Col >
    );
};

export default Doctor;