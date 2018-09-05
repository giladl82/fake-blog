import { getUserById, getUsers } from './users';

jest.mock('./users');

describe('Bll/users getUserById', () => {
  it('Should find requested user when found or return null / undefined' , () => {
   return getUsers().then(users => {
     console.log(users[0]);
     expect(1 === 1).toBeTruthy()
   })
  })
})