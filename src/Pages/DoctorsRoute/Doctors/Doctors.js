import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("./doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data))


    }, [])

    return (
        <div>
            <Container>
                <h1>Our Doctors</h1>
                <Row sm={1} md={2} lg={2} xs={1} >
                    {
                        doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;