import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const MakeAdmin = () => {
    const [adminInfo, setAdminInfo] = useState({});
    const navigate = useNavigate();
    const handleSetAdmin = e => {
        const field = e.target.name;
        const value = e.target.value;
        let newAdmin = {};
        newAdmin[field] = value;

        setAdminInfo(newAdmin);
    }
    const setAdminRole = e => {
        e.preventDefault();
        fetch("https://newlife-hospital-server.vercel.app/users", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(adminInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.upsertedId) {
                    alert("Successfully Engaged as an Admin");
                    navigate("/dashboard");
                }
            })
    }
    return (
        <div className='w-lg-50 w-md-50 mx-auto'>
            <input className="form-control my-5 w-50 mx-auto" type="email" name="admin" onChange={handleSetAdmin} placeholder='abc@gmail.com' />
            <input className="form-control my-5 w-50 mx-auto bg-info" type="submit" value="Make Admin" onClick={setAdminRole} />
        </div>
    );
};

export default MakeAdmin;