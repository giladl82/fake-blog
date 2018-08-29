import { getUsers, findUserById } from './users';

const filterPostsByText = (posts, filterText) => posts.filter(post => post.title.includes(filterText));
const filterPostByUserId = (posts, userId) => posts.filter(post => post.userId.toString() === userId || !userId);

let cachedPosts;

const fetchPosts = () =>
  new Promise(resolve => {
    if (cachedPosts) {
      resolve(cachedPosts);
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
          cachedPosts = posts;
          resolve(cachedPosts);
        });
    }
  });

export const getPosts = (currentPageNumber, { perPage, searchBy, userId }) => {
  return new Promise(resolve => {
    fetchPosts().then(posts => {
      perPage = parseInt(perPage, 10);
      const startIndex = (currentPageNumber - 1) * perPage;
      let filterPosts = filterPostsByText(posts, searchBy);

      filterPosts = filterPostByUserId(filterPosts, userId);

      const totalPostsCount = filterPosts.length;

      filterPosts = filterPosts.slice(startIndex, startIndex + perPage);

      getUsers().then(users => {
        filterPosts.forEach(post => {
          const user = findUserById(users, post.userId);
          if (user) {
            post.userName = user.name;
          }
        });

        resolve({ posts: filterPosts, totalPostsCount });
      });
    });
  });
};

export const getPost = postId => (new Promise(resolve => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(comments => {
          resolve({ ...post, comments });
        })
    });
}))
