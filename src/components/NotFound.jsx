import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container center'>
            <p>These aren't the droids you're looking for</p>
            <img src="https://compote.slate.com/images/b3d0f513-e5c2-4058-9eb9-7c8a4ed6addd.jpeg?crop=980%2C653%2Cx0%2Cy0" alt="obi-wan" />
            <div>
                <Link to={"/"}>Start again!</Link>
            </div>
        </div>
    )
}

export default NotFound