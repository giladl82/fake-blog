import { users } from './__data/users';
const getUsers = () =>
  new Promise(resolve => {
    resolve(users);
  });

export default getUsers;
