import { fetchPosts, fetchPost, fetchComments, stam } from './fetch';
import { getUsers, getUserById } from './users';

const filterPostsByText = (posts, filterText) => posts.filter(post => post.title.includes(filterText));
const filterPostByUserId = (posts, userId) => posts.filter(post => post.userId.toString() === userId || !userId);

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
          const user = getUserById(users, post.userId);
          if (user) {
            post.userName = user.name;
          }
        });

        resolve({ posts: filterPosts, totalPostsCount });
      });
    });
  });
};

export const getPost = postId =>
  new Promise(resolve =>
    Promise.all([fetchPost(postId), fetchComments(postId)]).then(([post, comments]) => {
      resolve({ ...post, comments });
    })
  );
