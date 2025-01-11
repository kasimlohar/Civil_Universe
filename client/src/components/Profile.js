import React from 'react';

const Profile = ({ user }) => {
    return (
        <div>
            <h1>Profile Page</h1>
            <div>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <h3>Past Projects</h3>
                <ul>
                    {user.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Profile;
