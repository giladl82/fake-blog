import { users } from './__data/users';
import { posts } from './__data/posts';
import { comments } from './__data/comments';

let cachedPosts = undefined;

export const fetchPosts = () =>
  new Promise(resolve => {
    resolve(posts);
  });

export const fetchPost = postId =>
  new Promise(resolve => {
    resolve(posts.find(post => post.id === postId));
  });

export const fetchComments = postId =>
  new Promise(resolve => {
    resolve(comments);
  });

let cachedUsers = undefined;

export const fetchUsers = () =>
  new Promise(resolve => {
    resolve(users);
  });
