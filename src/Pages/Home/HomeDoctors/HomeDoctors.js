import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeDoctor from '../HomeDoctorCard/HomeDoctor';

const HomeDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("https://newlife-hospital-server.vercel.app/doctors")
            .then(res => res.json())
            .then(data => setDoctors(data))


    }, [])

    return (
        <div>
            <Container>
                <h1 className='text-center mb-5 text-danger'>Our Doctors</h1>
                <Row sm={1} md={2} lg={3} xs={1} >
                    {
                        doctors.slice(0, 6).map(doctor => <HomeDoctor doctor={doctor}></HomeDoctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeDoctors;