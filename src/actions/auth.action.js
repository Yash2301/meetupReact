const login = payload => {
    return {
        type: 'auth/login',
        payload
    }
}

export {
    login,
}