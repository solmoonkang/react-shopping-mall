import { SELECT_CATEGORY } from "../actions/categoryActions";

const categoryReducer = (state = "fetchAllProducts", action) => {
    console.log(`Action received in categoryReducer:`, action);
    switch (action.type) {
        case SELECT_CATEGORY:
            return action.payload;
        default: 
            return state;
    }
}

export default categoryReducer;
