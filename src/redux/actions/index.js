export const signin = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const logout = () => {
    return {
        type: 'LOG_OUT'
    }
}

export const setUser = (email) => {
    return {
        type: 'SET_USER',
        payload: email
    }
}