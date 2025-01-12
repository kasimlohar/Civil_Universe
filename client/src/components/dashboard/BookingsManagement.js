import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingsManagement = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('/api/bookings');
                setBookings(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Bookings Management</h1>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        {booking.name} - {booking.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingsManagement;