import { fetchUsers } from './fetch';

export const getUsers = () => fetchUsers();

export const getUserById = (users, id) => users.find(user => user.id === id);
