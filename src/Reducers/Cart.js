const initialState = {
  items: [],
  total: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      let addedItem = action.payload;
      let exitedItem = state.items.find(item => addedItem.id === item.id);
      if (exitedItem) return { ...state };

      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        items: [
          ...state.items,
          {
            ...addedItem,
            quantity: 1
          }
        ],
        total: newTotal
       }
    }
    case 'REMOVE_PRODUCT_FROM_CART': {
      let removedItem = action.payload;
      let remTotal = state.total - removedItem.price*removedItem.quantity;

      return {
        ...state,
        items: state.items.filter(i => i.id != removedItem.id),
        total: remTotal
      };
    }
    case 'ADD_ITEM_QUANTITY': {
      let addedQItem = action.payload;
      addedQItem.quantity += 1;
      let itemATotal = state.total + addedQItem.price;

      return {
        ...state,
        items: [ ...state.items ],
        total: itemATotal
      };
    }
    case 'DELETE_ITEM_QUANTITY': {
      let delQItem = action.payload;
      if (delQItem.quantity === 1) return { ...state };
                
      delQItem.quantity -= 1;
      let itemDTotal = state.total - delQItem.price;

      return {
        ...state,
        items: [ ...state.items ],
        total: itemDTotal
      };
    }
    default:
      return state;
  }
}
