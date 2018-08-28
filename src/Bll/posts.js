const filterPostsByText = (posts, filterText) => (posts.filter(post => post.title.includes(filterText)))

export const fetchPosts = (numberOfPostsPerPage, currentPageNumber, filterText) => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      const startIndex = (currentPageNumber - 1) * numberOfPostsPerPage;
      return filterPostsByText(posts, filterText).slice(startIndex, startIndex+ numberOfPostsPerPage);
    });

}