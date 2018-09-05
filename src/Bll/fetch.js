let cachedPosts = undefined;

export const fetchPosts = () =>
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

export const fetchPost = postId =>
  new Promise(resolve =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(post => {
        resolve(post);
      })
  );

export const fetchComments = postId =>
  new Promise(resolve =>
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(comments => {
        resolve(comments);
      })
  );

let cachedUsers = undefined;

export const fetchUsers = () => {
  if (cachedUsers) {
    return Promise.resolve(cachedUsers);
  }

  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      cachedUsers = json;
      return json;
    });
};
