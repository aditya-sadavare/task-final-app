import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = (params) => axios.get(API_URL, { params });
export const addTask = (data) => axios.post(API_URL, data);
export const toggleTask = (id) => axios.patch(`${API_URL}/${id}/toggle`);
