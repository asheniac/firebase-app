const INITAL_STATE = {
  isAuth: false,
  user: null,
  checkingAuth: false,
};
export default function (state = INITAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
