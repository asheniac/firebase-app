import { AUTH_USER } from "../types";

const INITAL_STATE = {
  isAuth: false,
  user: null,
  checkingAuth: false,
};
export default function (state = INITAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...action.payload, checkingAuth: true };
    default:
      return state;
  }
}
