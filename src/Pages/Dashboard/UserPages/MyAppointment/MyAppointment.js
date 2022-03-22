import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyAppointment = (props) => {
    console.log(props.total);

    useEffect(() => {
        const biTotal = props.total;
        const newTotal = biTotal + props.appo.visit;
        if (props.appo.status === "approved") {

            props.setTotal(newTotal)

        }
        else {
            props.setTotal(props.total)
        }


    }, [])
    // props.appo.status, total, setTotal, props.appo.visit


    return (
        <>
            <tr>
                <td>{props.appo.doctorName}</td>
                <td>{props.appo.specialist}</td>
                <td>{props.appo.visit}</td>
                <td>{props.appo.status}</td>

            </tr>

        </>


    );
};

export default MyAppointment;