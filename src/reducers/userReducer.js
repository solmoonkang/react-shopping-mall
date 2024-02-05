import { LOGIN, LOGOUT } from "../actions/userActions";

const initialState = {
    loggedIn: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, loggedIn: true }

        case LOGOUT:
            return { ...state, loggedIn: false }
            
        default:
            return state;
    }
}

export default userReducer;
