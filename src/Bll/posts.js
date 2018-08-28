import { getUsers, findUserById } from './users';

const filterPostsByText = (posts, filterText) => posts.filter(post => post.title.includes(filterText));
const filterPostByUserId = (posts, userId) => posts.filter(post => post.userId.toString() === userId || !userId);

export const getPosts = (currentPageNumber, numberOfPostsPerPage, filterText, userId) => {
  return new Promise(resolve => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        numberOfPostsPerPage = parseInt(numberOfPostsPerPage, 10);
        const startIndex = (currentPageNumber - 1) * numberOfPostsPerPage;
        let filterPosts = filterPostsByText(posts, filterText);
        
        filterPosts = filterPostByUserId(filterPosts, userId);
        filterPosts = filterPosts.slice(startIndex, startIndex + numberOfPostsPerPage);
        getUsers().then(users => {
          filterPosts.forEach(post => {
            const user = findUserById(users, post.userId);
            if (user) {
              post.userName = user.name;
            }
          });

          resolve(filterPosts);
        });
      });
  });
};
