import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AllReview from './AllReview';

const AllReviews = () => {
    const [allreviws, setAllReviews] = useState([]);
    useEffect(() => {
        fetch("https://newlife-hospital-server.vercel.app/reviews")
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Doctor Name</th>
                        <th>Review</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allreviws.map(review => <AllReview review={review}></AllReview>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AllReviews;