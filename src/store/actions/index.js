import { AUTH_USER } from "../types";
import * as api from "../../api";

export const registerUsers = (userData) => ({
  type: AUTH_USER,
  payload: api.registerUsers(userData),
});

export const loginUser = (userData) => ({
  type: AUTH_USER,
  payload: api.loginUser(userData),
});
