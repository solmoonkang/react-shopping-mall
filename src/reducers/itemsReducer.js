const initialState = { category: "모두", items: [] };

const itemsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "LOAD_CATEGORY":
            return { ...state, category: action.payload.category, items: action.payload.items };

        default: 
            return state;
    }
}

export default itemsReducer;
