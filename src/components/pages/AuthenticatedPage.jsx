import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions'

function AuthenticatedPage() {

    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(logout());
    }

    return (
        <div>
            <h3>Welcome {user}</h3>
            <button onClick={handleClick}>Click to logout !</button>
        </div>
    );
}

export default AuthenticatedPage;
