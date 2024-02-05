import { LOAD_ITEMS } from "../actions/itemActions";

const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_ITEMS:
            return action.payload;
        default: 
            return state;
    }
}

export default itemsReducer;