import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../Home/Header/Header';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("https://newlife-hospital-server.vercel.app/doctors")
            .then(res => res.json())
            .then(data => setDoctors(data))


    }, [])

    return (
        <div>
            <Header></Header>
            <Container>
                <h1 className='text-center text-danger my-5'>Our Doctors</h1>
                <hr className="mb-5" style={{ border: "1px solid red" }} />

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