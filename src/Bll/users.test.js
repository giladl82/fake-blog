import { getUserById, getUsers } from './users';

jest.mock('./users');

describe('Bll/users getUserById', () => {
  let users;
  beforeAll(() => {
    console.log('beforeAll', users)
    return getUsers().then(users => {
      console.log('beforeAll - then', users)
      users = users;
      return users;
    });
  });

  test('Should find requested user when found or return null / undefined', () => {
    console.log('test', users)
    const userName = users[0].name;
    const user = getUserById(users, users[0].id);
    expect(user.userName).toBe(userName);
  });
});
