const initialState = {
    users:[]
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'user/addUser': {
            return {
                ...state,
                users: []
            }
        }
        default:
            return state
    }
}
