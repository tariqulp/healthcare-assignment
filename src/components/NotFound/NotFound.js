import React from 'react';
import notfound from '../../Assets/images/NotFound.png';

const NotFound = () => {
    return (
        <div>
            {/* if someone input wrong path it show 404 error */}
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;