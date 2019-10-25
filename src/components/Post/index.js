import React from 'react';

import './styles.sass';

const Post = ({ id, title, category }) => {
  return <li key={id} className="app-post">
    <h2 className="post-title">{title}</h2>
    <span className="post-category">{category}</span>
    {/* <p>{excerpt}</p> */}
  </li>;
};

export default Post;
