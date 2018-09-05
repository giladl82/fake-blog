import { users } from './__data/users';
export const getUsers = () =>
  new Promise(resolve => {
    resolve(users);
  });