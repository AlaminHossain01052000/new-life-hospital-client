import React from 'react';

const MyReview = (props) => {
    console.log(props);
    return (

        <tr>
            <td>{props.review.doctorName}</td>
            <td>{props.review.rating}</td>
            <td>{props.review.description}</td>
            <td>{props.review.status}</td>

        </tr>

    );
};

export default MyReview;