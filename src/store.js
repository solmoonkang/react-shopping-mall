import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import itemsReducer from "./reducers/itemsReducer";
import categoryReducer from "./reducers/categoryReducer";
import userReducer from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    cart: cartReducer,
    category: categoryReducer,
    items: itemsReducer,
    user: userReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;