import { LOGIN, LOGOUT } from "../actions/userActions";

const initialState = {
    loggedIn: false,
    email: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, loggedIn: true, email: action.payload }

        case LOGOUT:
            return { ...state, loggedIn: false, email: null }
            
        default:
            return state;
    }
}

export default userReducer;
