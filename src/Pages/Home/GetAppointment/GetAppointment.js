import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const GetAppointment = () => {
    const params = useParams();
    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        fetch(`https://newlife-hospital-server.vercel.app/doctors/${params.id}`)
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [params.id, doctor])


    const { user } = useAuth();
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (user && doctor) {

            const appointmentInfo = {
                displayName: user.displayName, email: user.email, ...data, status: "pending", doctorName: doctor.name, doctorId: doctor._id, visit: doctor.visit, specialist: doctor.specialist
            };

            fetch(`https://newlife-hospital-server.vercel.app/appointments`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(appointmentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert("Information is submitted succesfully. You will be confirmed when your appointment is booked");
                        navigate("/");
                    }
                })
        }


    };

    return (
        <div>
            <div className="purchase-form-container backgroud-img">

                <form onSubmit={handleSubmit} style={{ width: "75%", margin: "0  auto" }}>
                    <input className="purchase-info-field-default form-control mb-3 " defaultValue={user.displayName} disabled />
                    <input defaultValue={user.email} disabled className="form-control mb-3 purchase-info-field-default" />
                    <input defaultValue={doctor.name} disabled className="purchase-info-field-default form-control mb-3" />
                    <input defaultValue={doctor.visit} disabled className="purchase-info-field-default form-control mb-3" />
                    <input defaultValue={doctor.specialist} disabled className="form-control mb-3 purchase-info-field-default" />
                    <input required type="text" className="form-control mb-3 form-control mb-3 purchase-info-field" placeholder="Your Address Please" onChange={handleOnChange} name="address" />

                    <input required type="text" className="form-control mb-3 purchase-info-field" onChange={handleOnChange} placeholder="Your Phone Number" name="phone" />
                    <input type="submit" className="btn btn-warning" value="Confirm" />
                </form>

            </div>        </div>
    );
};

export default GetAppointment;