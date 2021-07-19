const login = text => {
    return {
        type: 'auth/login',
        payload: text
    }
}

const register = text => {
    return {
        type: 'auth/register',
        payload: text
    }
}

export {
    login,
    register
}