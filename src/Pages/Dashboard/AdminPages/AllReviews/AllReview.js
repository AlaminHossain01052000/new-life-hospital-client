import React, { useState } from 'react';

const AllReview = (props) => {
    const [reviewApproved, setReviewApproved] = useState(0);

    const { userName, userEmail, doctorName, review, status, doctorId } = props.review;

    const approveReview = (e) => {
        e.preventDefault();

        fetch(`https://newlife-hospital-server.vercel.app/reviews/${props.review._id}`, {
            method: "PUT",


        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setReviewApproved(doctorId);
                    window.location.reload(false);
                }
            })
    }
    if (reviewApproved) {
        fetch(`https://newlife-hospital-server.vercel.app/doctors/${doctorId}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (

        <tr>
            <td>{userName}</td>
            <td>{userEmail}</td>
            <td>{doctorName}</td>
            <td>{review}</td>
            <td>{status}</td>
            <td><button onClick={approveReview}>Approve</button></td>
        </tr>

    );
};

export default AllReview;