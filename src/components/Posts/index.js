import React from 'react';

import Post from 'src/components/Post';

const Posts = (props) => {
  const posts = props.posts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return <main className="app-posts">
    <ul>
      {posts}
    </ul>
  </main>;
};

export default Posts;
