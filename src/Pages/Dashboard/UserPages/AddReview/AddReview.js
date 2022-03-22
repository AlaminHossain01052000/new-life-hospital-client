import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const AddReview = () => {
    const [doctorInfo, setDoctorInfo] = useState({});
    const params = useParams();
    console.log(params);
    useEffect(() => {
        fetch(`https://newlife-hospital-server.vercel.app/doctors/${params.id}`)
            .then(res => res.json())
            .then(data => setDoctorInfo(data))
    }, [params])
    const [review, setReview] = useState({});
    const { user } = useAuth();
    const naviagte = useNavigate();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        let newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }
    const handleReviewAdding = e => {
        const userName = user.displayName;
        const userEmail = user.email;
        console.log(review);

        const givenReview = { userName, userEmail, ...review, status: "pending", doctorName: doctorInfo.name, doctorId: doctorInfo._id };

        fetch("https://newlife-hospital-server.vercel.app/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(givenReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Review Added Successfully");
                    naviagte("/doctors");
                }
            })
    }

    return (
        <div className='mx-auto w-50 mt-5'>
            <input className="form-control mb-3" type="text" disabled value={user.displayName} />
            <input className="form-control mb-3" type="text" disabled value={user.email} />
            <input className="form-control mb-3" type="number" placeholder='rating' name="review" onChange={handleOnChange} />
            <textarea className="form-control mb-3" row={5} col={5} placeholder='description' name="description" onChange={handleOnChange}>
            </textarea>
            <input className="form-control mb-3 btn btn-success" type="submit" onClick={handleReviewAdding} value="Add Review" />
        </div>
    );
};

export default AddReview;