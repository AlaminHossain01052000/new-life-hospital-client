import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AllAppointmentCard from '../AllAppointmentCard/AllAppointmentCard';
const AllAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch("https://newlife-hospital-server.vercel.app/appointments")
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Doctor</th>
                        <th>Doctor Name</th>
                        <th>Specialist</th>
                        <th>Visit</th>
                        <th>Status</th>
                        <th>Action</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map(appo => <AllAppointmentCard appo={appo}></AllAppointmentCard>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AllAppointments;