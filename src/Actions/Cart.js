export const addToCart = obj => ({
  type: 'ADD_PRODUCT_TO_CART',
  payload: obj,
});

export const removeFromCart = obj => ({
  type: 'REMOVE_PRODUCT_FROM_CART',
  payload: obj,
});

export const addItemQuantity = obj => ({
  type: 'ADD_ITEM_QUANTITY',
  payload: obj,
});

export const delItemQuantity = obj => ({
  type: 'DELETE_ITEM_QUANTITY',
  payload: obj,
});
