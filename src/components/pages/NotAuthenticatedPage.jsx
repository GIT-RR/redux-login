import React from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/actions';

function NotAuthenticatedPage() {

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(signin());
    }

    return (
        <div>
            <h3>Login</h3>
            <button onClick={handleClick}>Click to login !</button>
        </div>
    );
}

export default NotAuthenticatedPage;
