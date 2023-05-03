import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dolores suscipit veniam rem totam repellat sed distinctio asperiores, incidunt saepe?</p>
            <p>Go back to<Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;