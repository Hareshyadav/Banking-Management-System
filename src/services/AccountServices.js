import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8089/api/accounts';
export const listAccount = () =>  axios.get(`${REST_API_BASE_URL}/all-accounts`);
export const createAccount = (account) =>  axios.post(`${REST_API_BASE_URL}/add-account`, account);
export const getAccountById = (id) =>  axios.get(`${REST_API_BASE_URL}/${id}`);
export const updateEmployee = (id, account) => axios.put(`${REST_API_BASE_URL}/${id}`, account);
export const deleteAccount = (id) => axios.delete(`${REST_API_BASE_URL}/${id}`);