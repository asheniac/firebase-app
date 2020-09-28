import { AUTH_USER, LOGOUT_USER, ADD_REVIEW } from "../types";
import * as api from "../../api";

export const registerUsers = (userData) => ({
  type: AUTH_USER,
  payload: api.registerUsers(userData),
});

export const loginUser = (userData) => ({
  type: AUTH_USER,
  payload: api.loginUser(userData),
});

export const autoSignIn = () => ({
  type: AUTH_USER,
  payload: api.autoSignIn(),
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: api.logoutUser(),
});

export const updateProfile = (formData, isEmailChanged) => ({
  type: AUTH_USER,
  payload: api.updateProfile(formData, isEmailChanged),
});

//====reviews=====

export const addReview = (data, user) => ({
  type: ADD_REVIEW,
  payload: api.addReview(data, user),
});
