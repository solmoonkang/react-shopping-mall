import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import itemsReducer from "./itemsReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";

export default combineReducers({
    cart: cartReducer,
    category: categoryReducer,
    items: itemsReducer,
    user: userReducer
});