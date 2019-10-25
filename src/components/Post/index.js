import React from 'react';

import './styles.sass';

const Post = (props) => {
  const post = props.post;

  return <li key={post.id} className="app-post">
    <h2 className="post-title">{post.title}</h2>
    <span className="post-category">{post.category}</span>
    <p>{post.excerpt}</p>
  </li>;
};

export default Post;
