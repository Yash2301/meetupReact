const isLogin = ()=>{
    console.log(localStorage.getItem('isLogin') == "true");
    if(localStorage.getItem('isLogin') == "true"){
        return true;
    } else {
        return false;
    }
}

const setLogin = (token,user)=>{
    localStorage.setItem('token',token)
    localStorage.setItem('user',JSON.stringify(user))
    return localStorage.setItem('isLogin',true)
}

const getCurrentUser = ()=>{
    const user = localStorage.getItem('user')
    try {
        return JSON.parse(user);   
    } catch (error) {
        return {};
    }    
}

const setLogout = ()=>{
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
    setLogout,
    getCurrentUser
}