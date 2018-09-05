import { getUserById, getUsers } from './users';

jest.mock('./fetch');

describe('Bll/users getUserById', () => {
  let users;
  beforeAll(() => {
    return getUsers().then(data => {
      users = data;
      return data;
    });
  });

  it('Should find requested user', () => {
    const userName = users[0].name;
    const user = getUserById(users, users[0].id);
    expect(user.name).toBe(userName);
  });

  it('Should find undefined', () => {
    const user = getUserById(users, 0);
    expect(user).toBeUndefined();
  });
});
