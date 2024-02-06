export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item,
    };
};

export const removeFromCart = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: id,
    };
};

export const restoreCart = (items) => {
    return {
        type: "RESTORE_CART",
        payload: items,
    };
};

export const clearCart = () => ({
    type: "CLEAR_CART",
});