import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Booking = () => {
    const [date, setDate] = useState(new Date());
    const [service, setService] = useState('');
    const [status, setStatus] = useState('Pending');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking submission logic here
        console.log(`Service: ${service}, Date: ${date}, Status: ${status}`);
    };

    return (
        <div>
            <h1>Booking Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Service:</label>
                    <input 
                        type="text" 
                        value={service} 
                        onChange={(e) => setService(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Select Date:</label>
                    <Calendar 
                        onChange={setDate} 
                        value={date} 
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <button type="submit">Book Service</button>
            </form>
        </div>
    );
};

export default Booking;
