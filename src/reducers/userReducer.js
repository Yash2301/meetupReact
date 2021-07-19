const initialState = {
    users:[]
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'auth/login': {
            return {
                ...state,
                users: []
            }
        }
        default:
            return state
    }
}
