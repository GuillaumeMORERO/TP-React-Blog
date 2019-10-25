import React from 'react';

const Posts = (props) => {
  const posts = props.posts.map((post) => {
    return <li key={post.id} className="app-post">
      <h2>{post.title}</h2>
      <span>{post.category}</span>
      <p>{post.excerpt}</p>
    </li>;
  });

  return <main className="app-posts">
    <ul>
      {posts}
    </ul>
  </main>;
};

export default Posts;
