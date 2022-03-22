import React from 'react';

const AllAppointmentCard = (props) => {
    const { displayName, email, phone, doctorName, specialist, visit, address, status } = props.appo;
    const approveAppointmentStatus = (e) => {
        e.preventDefault();
        console.log("Hello");
        fetch(`https://newlife-hospital-server.vercel.app/appointments/${props.appo._id}`, {
            method: "PUT"
        })
            .then(res => console.log(res))
    }
    return (
        <tr>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{doctorName}</td>
            <td>{specialist}</td>
            <td>{visit}</td>
            <td>{status}</td>
            <td><button onClick={approveAppointmentStatus}>Approve</button></td>
        </tr>
    );
};

export default AllAppointmentCard;