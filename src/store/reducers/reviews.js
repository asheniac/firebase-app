import { ADD_REVIEW, CLEAR_REVIEW } from "../types";
export default function (state = {}, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, addReview: action.payload };
    case CLEAR_REVIEW:
      return { addReview: action.payload };
    default:
      return state;
  }
}
