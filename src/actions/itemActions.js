export const LOAD_ITEMS = "LOAD_ITEMS";

export const loadItems = (items) => ({
    type: LOAD_ITEMS,
    payload: items
});