import React from 'react';

const Profile = ({ user = {} }) => {
    return (
        <div>
            <h1>Profile Page</h1>
            <div>
                <h2>{user.name || 'N/A'}</h2>
                <p>Email: {user.email || 'N/A'}</p>
                <p>Phone: {user.phone || 'N/A'}</p>
                <h3>Past Projects</h3>
                <ul>
                    {user.projects ? user.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                    )) : <li>No projects available</li>}
                </ul>
            </div>
        </div>
    );
};

export default Profile;
