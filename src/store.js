import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import itemsReducer from "./reducers/itemsReducer";
import categoryReducer from "./reducers/categoryReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    cart: cartReducer,
    category: categoryReducer,
    items: itemsReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;