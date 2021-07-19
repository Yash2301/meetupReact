const isLogin = ()=>{
    return localStorage.getItem('isLogin')
}

const setLogin = (token)=>{
    localStorage.setItem('token',token)
    return localStorage.setItem('isLogin',true)
}

const setLogout = (token)=>{
    localStorage.setItem('token','')
    return localStorage.setItem('isLogin', false)
}

const getToken = ()=>{
    return localStorage.getItem('token')
}

export {
    setLogin,
    isLogin,
    getToken,
    setLogout
}