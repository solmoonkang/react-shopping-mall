export const loadCategory = (category, items) => ({
    type: "LOAD_CATEGORY",
    payload: { category, items },
});