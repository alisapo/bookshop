const initialState = {
  customerName: '',
  customerPhone: '',
  customerEmail: '',
  deliveryAddress: '',
  deliveryDate: '',
  deliveryTime: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        customerName: action.payload,
      };
    case 'SET_PHONE':
      return {
        ...state,
        customerPhone: action.payload,
      };
    case 'SET_EMAIL':
      return {
        ...state,
        customerEmail: action.payload,
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        deliveryAddress: action.payload,
      };
    case 'SET_DATE':
      return {
        ...state,
        deliveryDate: action.payload,
      };
    case 'SET_TIME':
      return {
        ...state,
        deliveryTime: action.payload,
      };
      default:
        return state;
  }
}
