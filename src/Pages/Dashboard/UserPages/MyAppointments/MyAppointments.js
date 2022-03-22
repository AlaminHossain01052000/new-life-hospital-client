import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyAppointment from '../MyAppointment/MyAppointment';

const MyAppointments = () => {
    const [appointment, setAppointments] = useState([]);

    const { user, total, setTotal } = useAuth();

    useEffect(() => {
        fetch(`https://newlife-hospital-server.vercel.app/appointments/email?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [user])

    useEffect(() => {
        if (appointment) {
            appointment.map(app => app.status === 'approved')
        }
    }, [])



    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>


                        <th>Doctor Name</th>
                        <th>Specialist</th>
                        <th>Visit</th>
                        <th>Status</th>



                    </tr>
                </thead>
                <tbody>
                    {
                        appointment.map(appo => <MyAppointment appo={appo}
                            total={total}
                            setTotal={setTotal}
                        ></MyAppointment>)
                    }
                </tbody>
            </Table>
            <br /><br />
            <h1>Total : {total}</h1>
        </div>
    );
};

export default MyAppointments;