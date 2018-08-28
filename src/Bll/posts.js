import { fetchUsers, findUserById } from './users';

const filterPostsByText = (posts, filterText) => (posts.filter(post => post.title.includes(filterText)))

export const fetchPosts = (numberOfPostsPerPage, currentPageNumber, filterText) => {
  return new Promise(resolve => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const startIndex = (currentPageNumber - 1) * numberOfPostsPerPage;
        const filterPosts = filterPostsByText(posts, filterText).slice(startIndex, startIndex + numberOfPostsPerPage);
        fetchUsers().then(users => {
          filterPosts.forEach(post => {
            const user = findUserById(users, post.userId)
            if (user) {
              post.userName = user.name;
            }
          });

          resolve(filterPosts);
        });
      });
  });
}