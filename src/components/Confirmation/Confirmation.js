import React from 'react';
import confirm from '../../Assets/images/success.png'

const Confirmation = () => {
    return (
        <div className='my-5'>
            {/* this is for confirm appoinment pic */}
            <img src={confirm} alt="" />
        </div>
    );
};

export default Confirmation;