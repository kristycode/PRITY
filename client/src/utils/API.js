import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
});

export const insertUser = payload => api.post(`/user`, payload);
export const getAllUsers = () => api.get(`/users`);
export const getUserById = id => api.get(`/user/${id}`);
export const insertLook = payload => api.post(`/look`, payload);
export const getAllLooks = () => api.get(`/looks`);
export const getLookById = id => api.get(`/look/${id}`);

const apis = {
    insertUser,
    getAllUsers,
    getUserById,
    insertLook,
    getAllLooks,
    getLookById
}

export default apis;