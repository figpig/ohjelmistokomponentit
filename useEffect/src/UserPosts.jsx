import React from 'react';

function UserPosts({ userPosts }) {
  return (
    <div>
      <h2>Users posts</h2>
      <ul>
        {userPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserPosts;
