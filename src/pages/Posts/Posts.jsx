import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getShortValue = (value, postId) => {
    if (value.length > 20) {
      return (
        <p className="post-text">
          {value.substring(0, 20)}
          <span className="more-text">... </span>
          <Link to={`/posts/${postId}/details`} className="details-button">Details</Link>
        </p>
      );
    }
    return <p className="post-text">{value}</p>;
  };

  return (
    <div className="container">
      <div className="scroll-container">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <h1>{post.id}</h1>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-text">{getShortValue(post.body, post.id)}</p>
            <Link to={`/posts/${post.id}/details`} className="more-text">more...</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
