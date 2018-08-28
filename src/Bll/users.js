let cachedUsers = undefined;

export const fetchUsers = () => {
  if(cachedUsers) {
    return Promise.resolve(cachedUsers)
  }

  return fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( response => response.json() )
    .then( json => {
      cachedUsers = json;
      return json;
    });
}

export const findUserById = (users, id) => users.find(user => user.id === id);