const cartReducer = (state = [], action) => {

    switch (action.type) {
        case "ADD_TO_CART": 

            const item = action.payload;
            const isItemInCart = state.find((i) => i.id === item.id);

            if (isItemInCart) {
                return state.map((i) => 
                    i.id === item.id ? { ...i, quantity: item.quantity + 1 } : i);
            }
            return [...state, { ...item, quantity: 1 }];
        
        case "REMOVE_FROM_CART":

            const targetId = typeof action.payload === "object" ? action.payload.id : action.payload;

            return state.reduce((ack, item) => {
                if (item.id === targetId) {
                    if (item.quantity === 1) return ack;
                    return [...ack, {...item, quantity: item.quantity - 1 }];
                } else {
                    return [...ack, item];
                }
            }, []);

        case "CLEAR_CART":

            return [];

        default:
            return state;
    }
};

export default cartReducer;
