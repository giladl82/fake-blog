export const fetachUsers = () => {
  return fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( response => response.json() )
    .then( json => json );
}