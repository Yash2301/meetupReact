import { isLogin, setLogin,getCurrentUser } from "../utils"

const initialState = {
    isLogin: isLogin()?true:false,
    user: getCurrentUser()?getCurrentUser():{
        name:"guest"
    }
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'auth/login': {
            setLogin(action.payload.token,action.payload.user);
            return {
                ...state,
                isLogin:true,
                user: action.payload.user
            }
        }
        default:
            return state
    }
}
