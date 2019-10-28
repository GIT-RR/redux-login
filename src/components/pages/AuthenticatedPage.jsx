import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions'

function AuthenticatedPage() {

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(logout());
    }

    return (
        <div>
            <h3>Your are authenticated :D</h3>
            <button onClick={handleClick}>Click to logout !</button>
        </div>
    );
}

export default AuthenticatedPage;
