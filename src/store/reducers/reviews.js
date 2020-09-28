import { ADD_REVIEW } from "../types";
export default function (state = {}, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, addRevies: action.payload };
    default:
      return state;
  }
}
