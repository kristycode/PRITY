import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const insertUser = (payload) => api.post(`/user`, payload);
export const getAllUsers = () => api.get(`/users`);
export const getUserById = (id) => api.get(`/user/${id}`);
export const insertLook = (payload) => api.post(`/look`, payload);
export const getAllLooks = () => api.get(`/looks`);
export const getLookById = (id) => api.get(`/look/${id}`);
export const getAllColors = () => api.get(`colors`);
export const insertColor = (payload) => api.post(`/color`, payload);
export const registerUser = (payload) => api.post(`/register`, payload);
export const loginUser = (payload) => api.post(`/login`, payload);

const apis = {
  insertUser,
  getAllUsers,
  getUserById,
  insertLook,
  getAllLooks,
  getLookById,
  insertColor,
  getAllColors,
  registerUser,
  loginUser,
};

export default apis;
