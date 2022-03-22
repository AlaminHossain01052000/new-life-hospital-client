import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyReview from '../MyReview/MyReview';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://newlife-hospital-server.vercel.app/reviews/email/user?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user])
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>


                        <th>Doctor Name</th>
                        <th>Rating</th>
                        <th>description</th>
                        <th>Status</th>



                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <MyReview review={review}
                            key={review._id}
                        ></MyReview>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyReviews;