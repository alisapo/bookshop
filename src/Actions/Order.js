export const confirmOrder = obj => ({
  type: 'CONFIRM_ORDER',
  payload: obj,
});

export const setName = value => ({
  type: 'SET_NAME',
  payload: value,
});

export const setPhone = value => ({
  type: 'SET_PHONE',
  payload: value,
});

export const setEmail = value => ({
  type: 'SET_EMAIL',
  payload: value,
});

export const setAddress = value => ({
  type: 'SET_ADDRESS',
  payload: value,
});

export const setDate = value => ({
  type: 'SET_DATE',
  payload: value,
});

export const setTime = value => ({
  type: 'SET_TIME',
  payload: value,
});